'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import '/app/green.css';
import { signInWithGoogle } from '../Firebase/auth';
import { createSession } from '../../components/actions/actionSesion';
import { getAuth, getIdTokenResult } from "firebase/auth";

export default function Access() {
    const router = useRouter();

    const iniciarSesionConGoogle = async () => {
        try {
            const userCredential = await signInWithGoogle();
            if (!userCredential.user) {
                throw new Error("No user in userCredential");
            }

            const auth = getAuth();
            const user = auth.currentUser;
            if (!user) {
                throw new Error("User not found after sign-in");
            }

            const tokenResult = await getIdTokenResult(user);
            const isNewUser = tokenResult.claims['isNewUser'];

            if (isNewUser) {
                router.push('/signin');
                alert('Correo no registrado. Serás redirigido para crear una cuenta.');
            } else {
                const uid = user.uid;
                await createSession(uid);
                // alert('Inicio de sesión exitoso');
                router.push('/home');
            }
        } catch (error) {
            console.error("Error al iniciar sesión: ", error);
            alert("Hubo un error al iniciar sesión");
        }
    };

    return (
        <div>
            <div className="Main">
                <div>
                    <Image src="/Imagenes/cuadra.png" width={430} height={197} style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 60 }} alt="Imagen de la cuadra de Golfito" />
                </div>

                <div className="medium">
                    <h4 className="textC">¿Ya tienes cuenta?</h4>
                    <button className='btnI' onClick={iniciarSesionConGoogle}>Iniciar Sesión con Google</button>

                    <h4 className="textC">Crear una nueva cuenta</h4>
                    <Link className='btnI' href={'login/signin'}>Crear Cuenta</Link>
                </div>

                <div className="Spacer"></div>
                <div className="card">
                    <h3 className="footti">S.H.T Golfito</h3>
                    <h4 className="footti2">Sistema de Horarios de Transporte</h4>
                </div>
            </div>
        </div>
    );
}
