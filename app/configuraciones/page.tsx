import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Perfil() {
    return (
        <body className="white-bg">
            <nav className="navbarconf">
                <h3 className="footti">S.H.T Golfito</h3>
                <h4 className="footti2">Sistema de Horarios de Transporte</h4>
            </nav>

            <div className="TOP">
                <Image src={'/Iconos/Perfil.png'} width={131} height={121} alt="imagen de perfil" />
                <h5 id="correo">Correo@gmail.com</h5>
            </div>

            <h2 className="Titulo">Nombre Usuario</h2>

            <div className="LineaA"></div>

            <div className="MTP">
                <h3 id="subtitulo"> Métodos de Pago</h3>

                <Link className="MTPE" href='/configuraciones/efectivo'>
                    <Image src={'/Iconos/Efectivo.png'} width={35} height={35} alt="Imagen de cash" />
                    <p>Efectivo</p>
                    <Image src={'/Iconos/flechaAtras.png'} width={30} height={30} style={{ transform: 'scaleX(-1)' }} alt="Flecha hacia adelante" />
                </Link>

                <div className="LineaN"></div>

                <Link className="MTPE" href='/configuraciones/tarjeta'>
                    <Image src={'/Iconos/Tarjeta.png'} width={35} height={35} alt="Imagen de cash" />
                    <p>Tarjeta</p>
                    <Image src={'/Iconos/flechaAtras.png'} width={30} height={30} style={{ transform: 'scaleX(-1)' }} alt="Flecha hacia adelante" />
                </Link>

            </div>

            <div className="LineaA"></div>

            <h2 className="Titulo">Configuración de Cuenta</h2>

            <Link className="CONF" href='/configuraciones/editProfile'>
                <Image src={'/Iconos/ConfPersonal.png'} width={35} height={35} alt="Imagen de cash" />
                <p>Personal</p>
                <Image src={'/Iconos/flechaAtras.png'} width={30} height={30} style={{ transform: 'scaleX(-1)' }} alt="Flecha hacia adelante" />
            </Link>

            <div className="LineaN"></div>

            <div className="Spacer"></div>

            <div className="tabnav" >
                <Link href='/'> <Image src={'/Iconos/Principal.png'} width={50} height={50} alt="Icono de casita" /></Link>
                <Link href='/configuraciones'><Image id="perfile" src={'/Iconos/Usuario.png'} width={50} height={50} alt="Icono de usuario" /></Link>
            </div>
        </body>
    );
}