import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Access() {
    return (
        <body className="green-bg">
            <div className="Main">
                <div >
                    <Image src="/Imagenes/cuadra.png" width={430} height={197} style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 60 }} alt="Imagen de la cuadra de Golfito" />
                </div>

                <div className="medium">
                    <h4 className="textC">Ya tienes cuenta ? </h4>
                    <Link className='btnI' href={'/login'}> Iniciar Sesion</Link>

                    <h4 className="textC">Crear una nueva cuenta </h4>
                    <Link className='btnI' href={'/login/signin'}> Crear Cuenta</Link>

                </div>

                <div className="Spacer"></div>
                <div className="card">
                    <h3 className="footti">S.H.T Golfito</h3>
                    <h4 className="footti2">Sistema de Horarios de Transporte</h4>
                </div>

            </div>
        </body>
    );


}