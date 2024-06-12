import Image from "next/image";
import Link from "next/link";

export default function Rrecuperar2() {
    return (
        <div>
            <nav>
                <Image src='/public/Iconos/flechaAtras.png' width={50} height={53} alt='Flecha de retroceso' />
                <h3>Olvidó su Contraseña</h3>
            </nav>

            <div>
                <h5>Por favor ingrese el código de verificación que recibió en su correo electrónico</h5>
            </div>

            <section>
                <div>
                    <input type="number" placeholder="Código de verificación:" />
                </div>
                <button>
                    <Link href='/'>Continuar</Link>
                </button>
            </section>

            <div>
                <h3>S.H.T Golfito</h3>
                <h4>Sistema de Hoirarios de Transporte</h4>
            </div>



        </div>

    );


}