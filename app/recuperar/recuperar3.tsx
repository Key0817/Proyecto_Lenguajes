import Link from "next/link";

export default function Rrecuperar3() {
    return (
        <div>
            <nav><h3>Cambiar Contraseña</h3></nav>

            <div>
                <h5>Ingrese su nueva Contraseña</h5>
            </div>

            <section>
                <div>
                    <input type="password" placeholder="Nueva contraseña:" />
                    <input type="password" placeholder="Confirmar nueva contraseña:" />
                </div>
                <button>
                    <Link href='/'>Cambiar</Link>
                </button>
            </section>

            <div>
                <h3>S.H.T Golfito</h3>
                <h4>Sistema de Hoirarios de Transporte</h4>
            </div>



        </div>

    );


}