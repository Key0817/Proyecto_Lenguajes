import React from "react";
import Image from "next/image";
import Link from "next/link";
import '../conf.css';


export default function CambaiarPass() {
    return (
        <div className="white-bg">
            <nav className="navbarEF">
                <Link href="/configuraciones/editProfile"><Image src='/Iconos/flechaAtras.png' width={50} height={53} style={{ marginTop: 15 }} alt='Flecha de retroceso' /></Link>
                <div id="center">
                    <h3 className="footti">S.H.T Golfito</h3>
                    <h4 className="footti2">Sistema de Horarios de Transporte</h4>
                </div>
            </nav>

            <div className="Info">
                <h3 style={{textAlign:'center'}}>Cambiar la contraseña</h3>
                <p>Esta contraseña es la que utlilizarás 
                para iniciar sesión en tu cuenta</p>
            </div>

            <section className="END">
                <div className="MidC">
                    <input className="txinpusC" type="password" placeholder="Ingrese su nueva contraseña:" />
                    <input className="txinpusC" type="password" placeholder="Confirme su nueva contraseña:" />
                </div>

                <Link className="btnI" href='/configuraciones/editProfile'>Actualizar</Link>

            </section>
        </div>
    );
}