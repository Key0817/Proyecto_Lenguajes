import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CambaiarEmail() {
    return (
        <body className="white-bg">
            <nav className="navbarEF">
                <Link href="/configuraciones/editProfile"><Image src='/Iconos/flechaAtras.png' width={50} height={53} style={{ marginTop: 15 }} alt='Flecha de retroceso' /></Link>
                <div id="center">
                    <h3 className="footti">S.H.T Golfito</h3>
                    <h4 className="footti2">Sistema de Horarios de Transporte</h4>
                </div>
            </nav>

            <div className="Info">
                <h3 style={{textAlign:'center'}}>Cambiar el nombre correo electrónico</h3>
                <p >Usarás este correo para recibir mensajes, iniciar sesión y recuperar tu cuenta</p>
            </div>

            <section className="END">
                <div className="MidC">
                    <input className="txinpusC" type="email" placeholder="Ingrese su nuevo correo:" />
                   
                </div>

                <Link className="btnI" href='/configuraciones/editProfile'>Actualizar</Link>

            </section>
        </body>
    );
}