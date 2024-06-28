'use client';
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import '/app/green.css'
//Importaciones de la firebase
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "../Firebase/AccesoFirebase"; 
import '/app/green.css';

export default function Login() {
    //Variables para validar el usuario 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Variable para enrutar
    const router = useRouter();


    //Funcion para la validacion de las credenciales ingresadas
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/configuraciones');
        } catch (error) {
            console.error("Error al iniciar sesión: ", error);
            alert("Correo o contraseña incorrectos. Por favor, intente nuevamente.");
        }
    };

    return (
        <div >
            <nav className="navbar">
                <Link href="/"><Image src='/Iconos/flechaAtras.png' width={50} height={53} style={{ marginTop: 15 }} alt='Flecha de retroceso' /></Link>
                <h3 className="Tittle">Iniciar Sesión</h3>
            </nav>
            <form onSubmit={handleLogin}>
                <div className="Mid">
                    <input
                        className="TXTinputs"
                        type="email"
                        placeholder="Correo:"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <input
                        className="TXTinputs"
                        type="password"
                        placeholder="Contraseña:"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                </div>
                <Link className="forgot" href="/recuperar/recuperar1">¿Olvidaste tu contraseña?</Link>
                <div className="END">
                    <button type="submit" className="btnI">Iniciar Sesión</button>
                    <br />
                    <Link className="having" href={'/login/signin'}>¿No tienes una cuenta? <span>Crear</span></Link>
                </div>
            </form>
            <div className="Spacer"></div>
            <div className="card">
                <h3 className="footti">S.H.T Golfito</h3>
                <h4 className="footti2">Sistema de Horarios de Transporte</h4>
            </div>
        </div>
    );
}
