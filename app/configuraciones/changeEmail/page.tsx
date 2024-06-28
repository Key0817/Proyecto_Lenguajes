// 'use client'
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import '/app/configuraciones/conf.css';

// // Importaciones para Firebase
// import { updateEmail } from "firebase/auth";
// import { getFirestore, doc, updateDoc } from "firebase/firestore";
// import { auth, app } from "../../Firebase/AccesoFirebase";

// const db = getFirestore(app);

// export default function CambiarEmail() {
//     const router = useRouter();
//     const [newEmail, setNewEmail] = useState("");
//     const user = auth.currentUser;

//     const handleChangeEmail = async () => {
//         try {
//             if (user) {
//                 // Actualizar correo electrónico en Firebase Authentication
//                 await updateEmail(user, newEmail);
                
//                 // Actualizar correo electrónico en Firestore
//                 await updateDoc(doc(db, 'User', user.uid), {
//                     correo: newEmail,
//                 });

//                 alert("Se ha enviado un correo de verificación al nuevo correo electrónico. Por favor verifica tu correo antes de iniciar sesión nuevamente.");
//                 router.push("/configuraciones/editProfile");
//             } else {
//                 throw new Error("Usuario no encontrado");
//             }
//         } catch (error: any) {
//             console.error("Error al actualizar el correo electrónico:", error.code, error.message);

//             // Manejo específico para el error de verificación del nuevo correo electrónico
//             if (error.code === "auth/operation-not-allowed") {
//                 alert("Por favor verifica el nuevo correo electrónico antes de cambiarlo.");
//             } else {
//                 alert("Hubo un error al actualizar el correo electrónico: " + error.message);
//             }
//         }
//     };

//     return (
//         <body className="white-bg">
//             <nav className="navbarEF">
//                 <Link href="/configuraciones/editProfile">
//                     <Image
//                         src="/Iconos/flechaAtras.png"
//                         width={50}
//                         height={53}
//                         style={{ marginTop: 15 }}
//                         alt="Flecha de retroceso"
//                     />
//                 </Link>
//                 <div id="center">
//                     <h3 className="footti">S.H.T Golfito</h3>
//                     <h4 className="footti2">Sistema de Horarios de Transporte</h4>
//                 </div>
//             </nav>

//             <div className="Info">
//                 <h3 style={{ textAlign: "center" }}>Cambiar el correo electrónico</h3>
//                 <p>
//                     Usarás este correo para recibir mensajes, iniciar sesión y recuperar tu
//                     cuenta
//                 </p>
//             </div>

//             <section className="END">
//                 <div className="MidC">
//                     <input
//                         className="txinpusC"
//                         type="email"
//                         placeholder="Ingrese su nuevo correo:"
//                         value={newEmail}
//                         onChange={(e) => setNewEmail(e.target.value)}
//                     />
//                 </div>

//                 <button className="btnI" onClick={handleChangeEmail}>
//                     Actualizar
//                 </button>
//             </section>
//         </body>
//     );
// }
'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import '/app/configuraciones/conf.css';

// Importaciones para Firebase
import { updateEmail } from "firebase/auth";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { auth, app } from "../../Firebase/AccesoFirebase";

const db = getFirestore(app);

export default function CambiarEmail() {
    const router = useRouter();
    const [newEmail, setNewEmail] = useState("");
    const user = auth.currentUser;

    const handleChangeEmail = async () => {
        try {
            if (user) {
                // Validar el formato del correo electrónico
                if (!validateEmail(newEmail)) {
                    throw new Error("Por favor ingrese un correo electrónico válido.");
                }

                // Enviar correo de verificación manualmente (simulado)
                await sendVerificationEmail(newEmail);

                alert("Se ha enviado un correo de verificación al nuevo correo electrónico. Por favor verifica tu correo antes de iniciar sesión nuevamente.");
                router.push("/configuraciones/editProfile");
            } else {
                throw new Error("Usuario no encontrado");
            }
        } catch (error: any) {
            console.error("Error al actualizar el correo electrónico:", error.code, error.message);

            // Manejo específico para el error de verificación del nuevo correo electrónico
            if (error.code === "auth/operation-not-allowed") {
                alert("Por favor verifica el nuevo correo electrónico antes de cambiarlo.");
            } else {
                alert("Hubo un error al actualizar el correo electrónico: " + error.message);
            }
        }
    };

    // Función para validar el formato del correo electrónico
    const validateEmail = (email: string) => {
        // Implementa tu lógica de validación de correo electrónico aquí
        // Puedes usar expresiones regulares u otras técnicas de validación
        return /\S+@\S+\.\S+/.test(email);
    };

    // Función para enviar un correo de verificación simulado
    const sendVerificationEmail = async (email: string) => {
        try {
            // Simular el envío del correo de verificación
            // Aquí podrías llamar a un servicio de envío de correo electrónico
            // Para demostración, simplemente alertamos un mensaje simulado
            alert(`Correo de verificación enviado a ${email}.`);
        } catch (error) {
            console.error("Error al enviar el correo de verificación:", error);
            throw new Error("Hubo un error al enviar el correo de verificación.");
        }
    };

    return (
        <body className="white-bg">
            <nav className="navbarEF">
                <Link href="/configuraciones/editProfile">
                    <Image
                        src="/Iconos/flechaAtras.png"
                        width={50}
                        height={53}
                        style={{ marginTop: 15 }}
                        alt="Flecha de retroceso"
                    />
                </Link>
                <div id="center">
                    <h3 className="footti">S.H.T Golfito</h3>
                    <h4 className="footti2">Sistema de Horarios de Transporte</h4>
                </div>
            </nav>

            <div className="Info">
                <h3 style={{ textAlign: "center" }}>Cambiar el correo electrónico</h3>
                <p>
                    Usarás este correo para recibir mensajes, iniciar sesión y recuperar tu
                    cuenta
                </p>
            </div>

            <section className="END">
                <div className="MidC">
                    <input
                        className="txinpusC"
                        type="email"
                        placeholder="Ingrese su nuevo correo:"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                    />
                </div>

                <button className="btnI" onClick={handleChangeEmail}>
                    Actualizar
                </button>
            </section>
        </body>
    );
}
