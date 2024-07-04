'use client'
import React, { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import '../conf.css';
import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";
import { auth, app } from '../../Firebase/AccesoFirebase';

const db = getFirestore(app);

export default function CambiarPass() {
    const [nuevaCedula, setNuevaCedula] = useState<string>('');
    const [cedulaActual, setCedulaActual] = useState<string>('');
    const [uid, setUid] = useState<string>('');

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setUid(user.uid);
            obtenerCedulaActual(user.uid);
        }
    }, []);

    const obtenerCedulaActual = async (uid: string) => {
        try {
            const userDoc = await getDoc(doc(db, 'User', uid));
            if (userDoc.exists()) {
                const { cedula } = userDoc.data() as { cedula: string }; // Asegura que cedula sea de tipo string
                setCedulaActual(cedula);
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error al obtener la cédula del usuario: ", error);
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNuevaCedula(event.target.value);
    };

    const actualizarCedula = async () => {
        try {
            await updateDoc(doc(db, 'User', uid), { cedula: nuevaCedula });
            setCedulaActual(nuevaCedula);
            setNuevaCedula('');
            alert('Cédula actualizada correctamente');
        } catch (error) {
            console.error("Error al actualizar la cédula: ", error);
            alert("Hubo un error al actualizar la cédula");
        }
    };

    return (
        <div className="white-bg">
            <nav className="navbarEF">
                <Link href="/configuraciones/editProfile">
                    <Image src='/Iconos/flechaAtras.png' width={50} height={53} style={{ marginTop: 15 }} alt='Flecha de retroceso' />
                </Link>
                <div id="center">
                    <h3 className="footti">S.H.T Golfito</h3>
                    <h4 className="footti2">Sistema de Horarios de Transporte</h4>
                </div>
            </nav>

            <div className="Info">
                <h3 style={{ textAlign: 'center' }}>Cambiar el número de cédula</h3>
                <p>Este número de cédula es tu identificador nacional, así que solo cámbialo en caso de equivocarte a la hora de crear cuenta.</p>
            </div>

            <section className="END">
                <div className="MidC">
                    <input
                        className="txinpusC"
                        type="text"
                        placeholder="Ingrese su nueva cédula"
                        value={nuevaCedula}
                        onChange={handleInputChange}
                    />
                </div>

                <button className="btnI" onClick={actualizarCedula}>Actualizar</button>
            </section>
        </div>
    );
}
