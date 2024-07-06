'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import '/app/configuraciones/conf.css';

// Importaciones para Firebase
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, doc, updateDoc, deleteDoc,getDoc } from "firebase/firestore";
import { auth, app } from '../../Firebase/AccesoFirebase';

const db = getFirestore(app);

interface UserData {
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    correo: string;
    imagenPerfil: string;
    cedula: string; 
}

export default function EditProfile() {
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [userData, setUserData] = useState<UserData>({
        nombre: '',
        primerApellido: '',
        segundoApellido: '',
        correo: '',
        imagenPerfil: '',
        cedula: '' 
    });
    const [uid, setUid] = useState('');

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setUid(user.uid);
            obtenerDatosUsuario(user.uid);
        } else {
            router.push('/access');
        }
    }, [router]);

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

    const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(file);

            const storage = getStorage(app);
            const storageRef = ref(storage, `profileImages/${uid}`);
            try {
                await uploadBytes(storageRef, file);
                const imageUrl = await getDownloadURL(storageRef);
                await updateDoc(doc(db, 'User', uid), { imagenPerfil: imageUrl });
                setUserData({ ...userData, imagenPerfil: imageUrl });
                //alert('Imagen de perfil actualizada correctamente');
            } catch (error) {
                console.error("Error al subir la imagen: ", error);
                alert("Hubo un error al subir la imagen");
            }
        }
    };

    const handleImageClick = () => {
        document.getElementById('fileInput')?.click();
    };

    const removeSession = async () => {
        try {
            await deleteDoc(doc(db, 'Sessions', uid));
            //alert('Sesión cerrada correctamente');
            router.push('/access'); // Redirigir a la página de acceso después de cerrar sesión
        } catch (error) {
            console.error("Error al eliminar sesión:", error);
            alert("Hubo un error al cerrar sesión");
        }
    };

    return (
        <div className="white-bg">
            <nav className="navbarEF">
                <Link href="/configuraciones"><Image src='/Iconos/flechaAtras.png' width={50} height={53} style={{ marginTop: 15 }} alt='Flecha de retroceso' /></Link>
                <div id="center">
                    <h3 className="footti">S.H.T Golfito</h3>
                    <h4 className="footti2">Sistema de Horarios de Transporte</h4>
                </div>
            </nav>

            <h3 style={{ textAlign: 'center', padding: 20 }}>Información de la Cuenta</h3>

            <div className="TOP" onClick={handleImageClick}>
                {selectedImage ? (
                    <Image src={URL.createObjectURL(selectedImage)} alt="Imagen de perfil" />
                ) : (
                    <Image
                        src={userData.imagenPerfil || "/Iconos/Perfil.png"}
                        width={131}
                        height={121}
                        alt="Imagen de perfil"
                    />
                )}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    id="fileInput"
                    style={{ display: 'none' }}
                />
            </div>

            <div className="MTP">
                <Link className="MTPE" href='/configuraciones/changeName' >
                    <Image src={'/Iconos/Nombre.png'} width={35} height={35} alt="Imagen de nombre" />
                    <p>{`${userData.nombre} ${userData.primerApellido} ${userData.segundoApellido}`}</p>
                    <Image src={'/Iconos/flechaAtras.png'} width={30} height={30} style={{ transform: 'scaleX(-1)' }} alt="Flecha hacia adelante" />
                </Link>

                <div className="LineaN"></div>

                <div className="MTPE">
                    <Image src={'/Iconos/Email.png'} width={35} height={35} alt="Imagen de email" />
                    <p>{auth.currentUser?.email}</p>
                    <Image src={'/Iconos/flechaAtras.png'} width={30} height={30} style={{ transform: 'scaleX(-1)' }} alt="Flecha hacia adelante" />
                </div>

                <div className="LineaN"></div>

                <Link className="MTPE" href={'/configuraciones/chagePass'} >
                    <Image src={'/Iconos/Seguridad.png'} width={35} height={35} alt="Imagen de cédula" />
                    <p>{userData.cedula}</p>
                    <Image src={'/Iconos/flechaAtras.png'} width={30} height={30} style={{ transform: 'scaleX(-1)' }} alt="Flecha hacia adelante" />
                </Link>
            </div>
            <div className="Spacer"></div>
            <div className="CONF" onClick={removeSession}>
                <Image src={'/Iconos/CerrarSesion.png'} width={35} height={35} alt="Imagen de cerrar sesión" />
                <p>Cerrar Sesión</p>
            </div>
        </div>
    );
}
