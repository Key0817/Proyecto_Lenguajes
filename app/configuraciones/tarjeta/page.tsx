import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Tarjeta() {
    return (
        <body className="white-bg">
            <nav className="navbarEF">
                <Link href="/configuraciones"><Image src='/Iconos/flechaAtras.png' width={50} height={53} style={{ marginTop: 15 }} alt='Flecha de retroceso' /></Link>
                <div id="center">
                    <h3 className="footti">S.H.T Golfito</h3>
                    <h4 className="footti2">Sistema de Horarios de Transporte</h4>
                </div>
            </nav>

            <h5 style={{ margin: 0, fontSize: 18, marginTop: 30, marginLeft: 20, marginBottom: 22}}>Ingresa tu número de tarjeta, la fecha de vencimiento y el código de seguridad</h5>

            <div className="NumberTarjet">
                <Image src={'/Iconos/Tarjeta.png'} width={35} height={35} alt="Imagen de una tarjeta " />
                <input type="number" placeholder="1234567812..." />
            </div>

            <div className="CCV">
                <input type="number" placeholder="MM/AA" />
                <input type="password" placeholder="123" />
            </div>

            <div className="END">
                <Link className="btnI" href='/configuraciones'>Guardar</Link>
            </div>
        </body>
    );
}