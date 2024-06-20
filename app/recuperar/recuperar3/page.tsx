import Link from "next/link";

export default function Rrecuperar3() {
    return (
        <body className="green-bg">
            <nav className="navbar"><h3 className="Tittle">Cambiar Contraseña</h3></nav>

            <div className="textbox">
                <h5>Ingrese su nueva Contraseña</h5>
            </div>

            <section className="ENDL">
                <div className="MidC">
                    <input className="TXTinputs" type="password" placeholder="Nueva contraseña:" />
                    <input className="TXTinputs" type="password" placeholder="Confirmar nueva contraseña:" />
                </div>

                <Link className="btnI" href='/recuperar/exito'>Cambiar</Link>

            </section>
            <div className="Spacer"></div>
            <div className="card">
                <h3 className="footti">S.H.T Golfito</h3>
                <h4 className="footti2">Sistema de Horarios de Transporte</h4>
            </div>
        </body>
    );
}