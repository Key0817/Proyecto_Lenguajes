import Image from "next/image";
import Link from "next/link";

export default function Rrecuperar1() {
    return (
        <body className="green-bg">
            <nav className="navbar">
                <Link href="/login"><Image src='/Iconos/flechaAtras.png' width={50} height={53} style={{ marginTop: 15 }} alt='Flecha de retroceso' /></Link>
                <h3 className="Tittle">Olvidó su Contraseña</h3>
            </nav>

            <div className="textbox">
                <h5>Por favor ingrese su correo para enviarle un código de verificación</h5>
            </div>

            <section className="ENDL">
                <div className="MidC">
                    <input className="TXTinputs" type="email" placeholder="Correo:" />
                </div>

                <Link className="btnI" href='/recuperar/recuperar2'>Enviar</Link>
            </section>
        <div className="Spacer"></div>
            <div className="card">
                <h3 className="footti">S.H.T Golfito</h3>
                <h4 className="footti2">Sistema de Horarios de Transporte</h4>
            </div>
        </body>
    );
}