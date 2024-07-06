"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '/app/green.css';
// Importaciones para la autenticación con Google 
import { useUserSession } from '../../../components/hook/userSesion';
import { signInWithGoogle, signOutWithGoogle } from '../../Firebase/auth';
import { createSession, removeSession } from '../../../components/actions/actionSesion';

// Importaciones para Firebase
import { setDoc, doc, getFirestore } from "firebase/firestore";
import { app } from '../../Firebase/AccesoFirebase';
import { getAuth } from 'firebase/auth';

const db = getFirestore(app);
const auth = getAuth(app);

export default function SignIn() {
    const router = useRouter();

    // Estado inicial del usuario
    const [user, setUser] = useState({
        nombre: '',
        primerApellido: '',
        segundoApellido: '',
        cedula: '',
    });

    // Función para manejar cambios en los inputs
    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setUser({ ...user, [name]: value });
    };

    // Función para crear un nuevo usuario
    const crearUsuario = async () => {
        try {
            // Crear el usuario en Firebase Authentication con Google
            const userCredential = await signInWithGoogle();
            const uid = userCredential.user.uid;

            // Guardar otros datos del usuario en Firestore
            await setDoc(doc(db, 'User', uid), {
                nombre: user.nombre,
                primerApellido: user.primerApellido,
                segundoApellido: user.segundoApellido,
                cedula: user.cedula,
                imagenPerfil: ''
            });

            // Crear sesión del usuario
            await createSession(uid);

            //alert('El usuario se registró correctamente');
            router.push('/home');
        } catch (error) {
            console.error("Error al registrar usuario: ", error);
            alert("Hubo un error al registrar el usuario");
        }
    };

    return (
        <div className="green-bg">
            <nav className="navbar">
                <Link href="/"><Image src='/Iconos/flechaAtras.png' width={50} height={53} style={{ marginTop: 15 }} alt='Flecha de retroceso' /></Link>
                <h3 className="Tittle">Crear Cuenta</h3>
            </nav>
            <div className="MidL">
                <input name='nombre' value={user.nombre} onChange={handleChangeText} className="TXTinputs" type="text" placeholder="Nombre:" />
                <input name='primerApellido' value={user.primerApellido} onChange={handleChangeText} className="TXTinputs" type="text" placeholder="Primer Apellido:" />
                <input name='segundoApellido' value={user.segundoApellido} onChange={handleChangeText} className="TXTinputs" type="text" placeholder="Segundo Apellido:" />
                <input name='cedula' value={user.cedula} onChange={handleChangeText} className="TXTinputs" type="number" placeholder="Cédula:" />
            </div>
            <div className="ENDL">
                <button className='btnI' onClick={crearUsuario}>Crear Cuenta</button>
                <br />
                <Link className="having" href={'/access'}>¿Ya tienes una cuenta? <span>Iniciar sesión</span></Link>
            </div>
            <div className="Spacer"></div>
            <div className="card">
                <h3 className="footti">S.H.T Golfito</h3>
                <h4 className="footti2">Sistema de Horarios de Transporte</h4>
            </div>
        </div>
    );
}
