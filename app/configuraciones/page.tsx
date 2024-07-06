'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { auth, app } from '../Firebase/AccesoFirebase';
import { Auth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import '/app/configuraciones/conf.css';

const db = getFirestore(app);

interface UserData {
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    correo: string;
    imagenPerfil: string;
    cedula: string;
}

export default function Perfil() {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [uid, setUid] = useState('');

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setUid(user.uid);
            obtenerDatosUsuario(user.uid);
        }
    }, []);

    const obtenerDatosUsuario = async (uid: string) => {
        try {
            const userDoc = await getDoc(doc(db, 'User', uid));
            if (userDoc.exists()) {
                const data = userDoc.data() as UserData;
                setUserData(data);
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error al obtener los datos del usuario: ", error);
        }
    };

    return (
        <div className="white-bg">
            <nav className="navbarconf">
                <h3 className="footti">S.H.T Golfito</h3>
                <h4 className="footti2">Sistema de Horarios de Transporte</h4>
            </nav>

            <div className="TOP">
                {userData ? (
                    <Image src={userData.imagenPerfil || '/Iconos/Perfil.png'} width={131} height={121} alt="Imagen de perfil" />
                ) : (
                    <Image src='/Iconos/Perfil.png' width={131} height={121} alt="Imagen de perfil" />
                )}
                <h5 id="correo">{auth.currentUser?.email}</h5>
            </div>

            <h2 className="Titulo">{userData ? `${userData.nombre} ${userData.primerApellido} ${userData.segundoApellido}` : "Nombre Usuario"}</h2>

            <div className="LineaA"></div>

            <div className="MTP">
                <h3 id="subtitulo">Métodos de Pago</h3>

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

            <div className="tabnav">
                <Link href='/home'><Image src={'/Iconos/Principal.png'} width={50} height={50} alt="Icono de casita" /></Link>
                <Link href='/configuraciones'><Image id="perfile" src={'/Iconos/Usuario.png'} width={50} height={50} alt="Icono de usuario" /></Link>
            </div>
        </div>
    );
}
