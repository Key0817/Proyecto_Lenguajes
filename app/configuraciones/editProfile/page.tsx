"use client"; 
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EditProfile() {

    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    return (
        <body className="white-bg">
            <nav className="navbarEF">
                <Link href="/configuraciones"><Image src='/Iconos/flechaAtras.png' width={50} height={53} style={{ marginTop: 15 }} alt='Flecha de retroceso' /></Link>
                <div id="center">
                    <h3 className="footti">S.H.T Golfito</h3>
                    <h4 className="footti2">Sistema de Horarios de Transporte</h4>
                </div>
            </nav>

            <h3 style={{ textAlign: 'center', padding: 20 }}>Informacion de la Cuenta</h3>

            <div className="TOP">
                {selectedImage ? (
                    <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="Imagen de perfil"
                    />
                ) : (
                    <Image
                        src="/Iconos/Perfil.png"
                        width={131}
                        height={121}
                        alt="Imagen de perfil predeterminada"
                    />
                )}
                <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>

            <div className="MTP">
                <Link className="MTPE" href='/configuraciones/changeName'>
                    <Image src={'/Iconos/Nombre.png'} width={35} height={35} alt="Imagen de cash" />
                    <p>Keylor Palacios Gómez</p>
                    <Image src={'/Iconos/flechaAtras.png'} width={30} height={30} style={{ transform: 'scaleX(-1)' }} alt="Flecha hacia adelante" />
                </Link>

                <div className="LineaN"></div>

                <Link className="MTPE" href='/configuraciones/changeEmail'>
                    <Image src={'/Iconos/Email.png'} width={35} height={35} alt="Imagen de cash" />
                    <p>correo@gmail.com</p>
                    <Image src={'/Iconos/flechaAtras.png'} width={30} height={30} style={{ transform: 'scaleX(-1)' }} alt="Flecha hacia adelante" />
                </Link>

                <div className="LineaN"></div>

                <Link className="MTPE" href='/configuraciones/chagePass'>
                    <Image src={'/Iconos/Seguridad.png'} width={35} height={35} alt="Imagen de cash" />
                    <p>**********</p>
                    <Image src={'/Iconos/flechaAtras.png'} width={30} height={30} style={{ transform: 'scaleX(-1)' }} alt="Flecha hacia adelante" />
                </Link>

            </div>
            <div className="Spacer"></div>
            <Link className="CONF" href='/'>
                <Image src={'/Iconos/CerrarSesion.png'} width={35} height={35} alt="Imagen de cash" />
                <p>Cerrar Sesión</p>

            </Link>
        </body>
    );
}