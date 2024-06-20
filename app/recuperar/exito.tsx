import Link from "next/link";
import Image from "next/image";

export default function Exito() {
    return (
        <div>
            <nav>
                <h3>Cambio Exitoso</h3>
            </nav>
            <section>
                <h5>La contraseña fue cambiada exitosamente</h5>
                <Image src={'/public/Iconos/Listo.png'} width={144} height={139} alt="Un check verde" />
            </section>

            <button>
                <Link href={'/'}>Iniciar Sesión</Link>
            </button>

            <div>
                <h3>S.H.T Golfito</h3>
                <h4>Sistema de Hoirarios de Transporte</h4>
            </div>


        </div>

    );

}