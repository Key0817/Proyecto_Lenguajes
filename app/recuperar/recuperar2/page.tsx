import Image from "next/image";
import Link from "next/link";

export default function Rrecuperar2() {
    return (
        <body className="green-bg">
            <nav className="navbar">
                <Link href="/recuperar/recuperar1"><Image src='/Iconos/flechaAtras.png' width={50} height={53} style={{ marginTop: 15 }} alt='Flecha de retroceso' /></Link>
                <h3 className="Tittle">Olvidó su Contraseña</h3>
            </nav>

            <div className="textbox">
                <h5>Por favor ingrese el código de verificación que recibió en su correo electrónico</h5>
            </div>

            <section className="ENDL">
                <div className="MidC">
                    <input className='TXTinputs' type="number" placeholder="Código de verificación:" />
                </div>
                <Link className='btnI' href='/recuperar/recuperar3'>Continuar</Link>
            </section>

            <div className="card">
                <h3 className="footti">S.H.T Golfito</h3>
                <h4 className="footti2">Sistema de Horarios de Transporte</h4>
            </div>
        </body>
    );
}