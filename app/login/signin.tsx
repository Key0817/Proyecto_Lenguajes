import Image from "next/image";
import React from "react";
import Link from "next/link";


export default function SignIn() {
    return (
        <div >
            <nav d-flex>
                <Image src='/public/Iconos/flechaAtras.png' width={50} height={53} alt='Flecha de retroceso' />
                <h3>Crear Cuenta</h3>
            </nav>
            <div>
                <input type="text" placeholder="Nombre:" />
                <input type="text" placeholder="Apellidos:" />
                <input type="number" placeholder="Cedula:" />
                <input type="email" placeholder="Correo:" />
                <input type="password" placeholder="Contraseña:" />
                <input type="password" placeholder="Confirmar contraseña:" />
            </div>
            <div>
                <button>
                <Link href='/'>Crear Cuenta</Link>
                </button>
                <br></br>
                <Link href={'/'}>Ya tienes una cuenta ? <span>Registrar</span></Link> {/* // Cambiar el href en el futuro */}
            </div>
            <div>
                <h3>S.H.T Golfito</h3>
                <h4>Sistema de Hoirarios de Transporte</h4>
            </div>

        </div>


    );

}