import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Login() {
    return (
        <body className="green-bg" >
            <nav className="navbar">

                <Link href="/"><Image src='/Iconos/flechaAtras.png' width={50} height={53} style={{ marginTop: 15 }} alt='Flecha de retroceso' /></Link>
                <h3 className="Tittle">Iniciar Sesión</h3>
            </nav>
            <div className="Mid">
                <input className="TXTinputs" type="email" placeholder="Correo:" />
                <br></br>
                <input className="TXTinputs" type="password" placeholder="Contraseña:" />
                <br></br>
            </div>
            <Link className="forgot" href="/recuperar/recuperar1">Olvidaste tu contraseña?</Link>
            <div className="END">

                <Link className="btnI" href='/'>Iniciar Sesión</Link>

                <br></br>
                <Link className="having" href={'/login/signin'}>No tienes una cuenta ? <span>Crear</span></Link>
            </div>

            <div className="Spacer"></div>
            
            <div className="card">
                <h3 className="footti">S.H.T Golfito</h3>
                <h4 className="footti2">Sistema de Horarios de Transporte</h4>
            </div>
        </body>


    );

}