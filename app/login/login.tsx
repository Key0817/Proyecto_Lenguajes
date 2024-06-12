import Image from "next/image";
import React from "react";
import Link from "next/link";


export default function Login() {
    return (
        <div >
            <nav>
                <Image src='/public/Iconos/flechaAtras.png' width={50} height={53} alt='Flecha de retroceso' />
                <h3>Iniciar Sesión</h3>
            </nav>
            <div>
                <input type="email" placeholder="Correo:" />

                <input type="password" placeholder="Contraseña:" />
                <a href="#olvido la Contraseña">Olvidaste tu contraseña?</a> {/* // Cambiar el href en el futuro */}
            </div>
            <div>
                <button>
                    <Link href='/'>Iniciar Sesión</Link>
                </button>
                <br></br>
                <Link href={'/'}>No tienes una cuenta ? <span>Crear</span></Link> {/* // Cambiar el href en el futuro */}
            </div>
            <div>
                <h3>S.H.T Golfito</h3>
                <h4>Sistema de Hoirarios de Transporte</h4>
            </div>

        </div>


    );

}