import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function Access() {
    return (

        <div >

            <div className="Fcuadra">
                <Image src="/Imagenes/cuadra.png" width={426} height={197} alt="Imagen de la cuadra de Golfito" />
            </div>

            <div>
                <h4>Ya tienes cuenta ? </h4>
                <button>
                    <a className='btnI' href={'/Login'}> Iniciar Sesion</a>
                </button>
                
                <h4>Crear una nueva cuenta </h4>
                
                <button>
                    <a className='btnI' href={'/'}> Crear Cuenta</a>
                </button>
            </div>

            <div>
                <h3>S.H.T Golfito</h3>
                <h4>Sistema de Hoirarios de Transporte</h4>
            </div>

        </div>


    );


}