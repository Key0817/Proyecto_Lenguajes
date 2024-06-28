'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '/app/configuraciones/conf.css'

// Importaciones para Firebase
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { auth, app } from '../../Firebase/AccesoFirebase';

const db = getFirestore(app);

export default function ChangeName() {
    const router = useRouter();

    // Estado para manejar los datos del formulario
    const [newName, setNewName] = useState('');
    const [newFirstLastName, setNewFirstLastName] = useState('');
    const [newSecondLastName, setNewSecondLastName] = useState('');

    // Función para manejar el envío del formulario
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const user = auth.currentUser;
            if (user) {
                const uid = user.uid;
                await updateUserData(uid);
                alert('Nombre y apellidos actualizados correctamente');
                router.push('/configuraciones/editProfile');
            } else {
                throw new Error('Usuario no encontrado');
            }
        } catch (error) {
            console.error('Error al actualizar nombre y apellidos:', error);
            alert('Hubo un error al actualizar los datos');
        }
    };

    // Función para actualizar los datos del usuario en Firestore
    const updateUserData = async (uid: string) => {
        try {
            await updateDoc(doc(db, 'User', uid), {
                nombre: newName,
                primerApellido: newFirstLastName,
                segundoApellido: newSecondLastName,
            });
        } catch (error) {
            console.error('Error al actualizar los datos del usuario:', error);
            throw error;
        }
    };

    return (
        <div className="white-bg">
            <nav className="navbar">
                <Link href="/configuraciones"><Image src='/Iconos/flechaAtras.png' width={50} height={53} style={{ marginTop: 15 }} alt='Flecha de retroceso' /></Link>
                <h3 className="Tittle">Cambiar Nombre y Apellidos</h3>
            </nav>

            <div className="Info">
                <h3 style={{ textAlign: 'center' }}>Cambiar el nombre de usuario</h3>
                <p>Este es el nombre que quieres que las personas usen para referirse a ti.</p>
            </div>


            <form onSubmit={handleSubmit}>
                <div className="MidL">
                    <input
                        name='newName'
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="TXTinputs"
                        type="text"
                        placeholder="Nuevo Nombre"
                        required
                    />
                    <input
                        name='newFirstLastName'
                        value={newFirstLastName}
                        onChange={(e) => setNewFirstLastName(e.target.value)}
                        className="TXTinputs"
                        type="text"
                        placeholder="Nuevo Primer Apellido"
                        required
                    />
                    <input
                        name='newSecondLastName'
                        value={newSecondLastName}
                        onChange={(e) => setNewSecondLastName(e.target.value)}
                        className="TXTinputs"
                        type="text"
                        placeholder="Nuevo Segundo Apellido"
                        required
                    />
                </div>
                <div className="ENDL">
                    <button className='btnI' type="submit">Guardar Cambios</button>
                </div>
            </form>
            <div className="Spacer"></div>
            <div className="card">
                <h3 className="footti">S.H.T Golfito</h3>
                <h4 className="footti2">Sistema de Horarios de Transporte</h4>
            </div>
        </div>
    );
}
