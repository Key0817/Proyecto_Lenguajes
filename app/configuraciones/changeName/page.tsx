import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CambaiarNombre() {
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
                <h3 style={{textAlign:'center'}}>Cambiar el nombre de usuario</h3>
                <p>Este es el nombre que quieres que las personas usen para referirse a ti.</p>
            </div>

            <section className="END">
                <div className="MidC">
                    <input className="txinpusC" type="text" placeholder="Ingrese su nuevo nombre:" />
                    <input className="txinpusC" type="text" placeholder="Ingrese sus nuevos apellidos:" />
                </div>

                <Link className="btnI" href='/configuraciones/editProfile'>Actualizar</Link>

            </section>
        </body>
    );
}