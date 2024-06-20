import Image from "next/image";
import React from "react";
import Link from "next/link";


export default function SignIn() {
    return (
        <body className="green-bg"> 
            <nav className="navbar">
                <Link href="/"><Image src='/Iconos/flechaAtras.png' width={50} height={53} style={{ marginTop: 15 }} alt='Flecha de retroceso' /></Link>
                <h3 className="Tittle">Crear Cuenta</h3>
            </nav>
            <div className="MidL">
                <input className="TXTinputs" type="text" placeholder="Nombre:" />
                <input className="TXTinputs" type="text" placeholder="Apellidos:" />
                <input className="TXTinputs" type="number" placeholder="Cedula:" />
                <input className="TXTinputs" type="email" placeholder="Correo:" />
                <input className="TXTinputs" type="password" placeholder="Contraseña:" />
                <input className="TXTinputs" type="password" placeholder="Confirmar contraseña:" />
            </div>
            <div className="ENDL">

                <Link className='btnI' href='/'>Crear Cuenta</Link>

                <br></br>
                <Link className="having" href={'/login'}>Ya tienes una cuenta ? <span>Registrar</span></Link> {/* // Cambiar el href en el futuro */}
            </div>
            <div className="Spacer"></div>

            <div className="card">
                <h3 className="footti">S.H.T Golfito</h3>
                <h4 className="footti2">Sistema de Horarios de Transporte</h4>
            </div>

        </body>
    );
}