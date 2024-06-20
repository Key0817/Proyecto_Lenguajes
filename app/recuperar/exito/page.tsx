import Link from "next/link";
import Image from "next/image";

export default function Exito() {
    return (
        <body className="green-bg">
            <nav className="navbar">
                <h3 className="Tittle">Cambio Exitoso</h3>
            </nav>

            <section className="ENDE" >
                <div className="MidC">
                    <h5 className="textboxE">La contraseña fue cambiada exitosamente</h5>
                    <Image src={'/Iconos/Listo.png'} width={144} height={139} alt="Un check verde" />
                </div>

                <Link className="btnI" href={'/login'}>Iniciar Sesión</Link>

            </section>

            <div className="card">
                <h3 className="footti">S.H.T Golfito</h3>
                <h4 className="footti2">Sistema de Horarios de Transporte</h4>
            </div>

        </body>
    );
}