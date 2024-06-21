import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Efectivo() {
    return (
        <body className="white-bg">
            <nav className="navbarEF">
                <Link href="/configuraciones"><Image src='/Iconos/flechaAtras.png' width={50} height={53} style={{ marginTop: 15 }} alt='Flecha de retroceso' /></Link>
                <div id="center">
                    <h3 className="footti">S.H.T Golfito</h3>
                    <h4 className="footti2">Sistema de Horarios de Transporte</h4>
                </div>
            </nav>

            <div className="textboxEf">
                <h5>Efectivo</h5>
                <Image src={'/Iconos/Efectivo.png'} width={35} height={35} alt="Icono de cash" />
            </div>

            <div className="Info">
                <h3 id="SubT">Paga los viajes en ejefctivo</h3>
                <p>Cuando ingrese su ruta se mostrará el monto que debas pagar al conductor</p>
            </div>

        </body>
    );
}