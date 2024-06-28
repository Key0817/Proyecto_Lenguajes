"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '/app/green.css';

// Importaciones para Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc, getFirestore } from "firebase/firestore";
import { auth, app } from '../../Firebase/AccesoFirebase';

const db = getFirestore(app);

export default function SignIn() {
    const router = useRouter();
    
    // Estado inicial del usuario
    const [user, setUser] = useState({
        nombre: '',
        primerApellido: '',
        segundoApellido: '',
        cedula: '',
        correo: '',
        contraseña: '',
        confContraseña: '',
    });

    // Función para manejar cambios en los inputs
    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setUser({ ...user, [name]: value });
    };

    // Validar que la contraseña y la confirmación coincidan
    const validarContraseñas = () => {
        return user.contraseña === user.confContraseña;
    };

    // Función para crear un nuevo usuario
    const crearUsuario = async () => {
        if (!validarContraseñas()) {
            alert("Las contraseñas no coinciden");
            return;
        }

        try {
            // Crear el usuario en Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, user.correo, user.contraseña);
            const uid = userCredential.user.uid;

            // Guardar otros datos del usuario en Firestore
            await setDoc(doc(db, 'User', uid), {
                nombre: user.nombre,
                primerApellido: user.primerApellido,
                segundoApellido: user.segundoApellido,
                cedula: user.cedula,
                correo: user.correo, // Guardamos el correo en Firestore
                imagenPerfil: '' // Inicialmente vacío, se puede actualizar en EditProfile
            });

            alert('El usuario se registró correctamente');
            router.push('/configuraciones');
        } catch (error) {
            console.error("Error al registrar usuario: ", error);
            alert("Hubo un error al registrar el usuario");
        }
    };

    return (
        <div className="green-bg">
            <nav className="navbar">
                <Link href="/"><Image src='/Iconos/flechaAtras.png' width={50} height={53} style={{ marginTop: 15 }} alt='Flecha de retroceso' /></Link>
                <h3 className="Tittle">Crear Cuenta</h3>
            </nav>
            <div className="MidL">
                <input name='nombre' value={user.nombre} onChange={handleChangeText} className="TXTinputs" type="text" placeholder="Nombre:" />
                <input name='primerApellido' value={user.primerApellido} onChange={handleChangeText} className="TXTinputs" type="text" placeholder="Primer Apellido:" />
                <input name='segundoApellido' value={user.segundoApellido} onChange={handleChangeText} className="TXTinputs" type="text" placeholder="Segundo Apellido:" />
                <input name='cedula' value={user.cedula} onChange={handleChangeText} className="TXTinputs" type="number" placeholder="Cedula:" />
                <input name='correo' value={user.correo} onChange={handleChangeText} className="TXTinputs" type="email" placeholder="Correo:" />
                <input name='contraseña' value={user.contraseña} onChange={handleChangeText} className="TXTinputs" type="password" placeholder="Contraseña:" />
                <input name='confContraseña' value={user.confContraseña} onChange={handleChangeText} className="TXTinputs" type="password" placeholder="Confirmar contraseña:" />
            </div>
            <div className="ENDL">
                <button className='btnI' onClick={crearUsuario}>Crear Cuenta</button>
                <br />
                <Link className="having" href={'/login'}>¿Ya tienes una cuenta? <span>Iniciar sesión</span></Link>
            </div>
            <div className="Spacer"></div>
            <div className="card">
                <h3 className="footti">S.H.T Golfito</h3>
                <h4 className="footti2">Sistema de Horarios de Transporte</h4>
            </div>
        </div>
    );
}
