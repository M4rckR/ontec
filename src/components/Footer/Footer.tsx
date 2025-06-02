import Link from "next/link";
import { TrustIndicators } from "./TrustIndicators"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { Copyright } from "./Copyright";

export const Footer = () => {
  return (
    <div className="">
        <TrustIndicators />
        <section className="bg-m-blue-main py-12">
            <div className="max-w-7xl mx-auto px-4 container">
                <section className="grid grid-cols-1 md:grid-cols-12 gap-4 text-center md:text-left space-y-8">
                    <div className="md:col-span-3">
                        <p className="text-white text-2xl font-bold md:pb-6">Ontec</p>
                        <p className="text-white pb-2">SÍGUENOS EN LAS REDES</p>
                        <div className="flex justify-center md:justify-start gap-2">
                            <div className="bg-white rounded-full p-1">
                                <FaInstagram className="w-6 h-6 text-m-blue-main" />
                            </div>
                            <FaFacebook className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-white pb-2 font-bold md:pb-6 text-sm">SOBRE NOSOTROS</p>
                        <div className="text-sm">
                            <Link href="/">
                                <p className="text-white">
                                    Sobre nosotros
                                </p>
                            </Link>
                            <Link href="/">
                                <p className="text-white">
                                    Nuestra tienda
                                </p>
                            </Link>
                            <Link href="/">
                                <p className="text-white">
                                    Contactanos
                                </p>
                            </Link>
                            <Link href="/">
                                <p className="text-white">
                                    Preguntas frecuentes
                                </p>
                            </Link>
                            <Link href="/">
                                <p className="text-white">
                                    Términos y condiciones
                                </p>
                            </Link>
                        </div>
                    </div>
                    {/* <div className="md:col-span-2">
                        <p className="text-white  pb-6 text-sm">MI CUENTA</p>
                        <div className="text-sm">
                            <Link href="/">
                                <p className="text-white">
                                    Crear cuenta
                                </p>
                            </Link>
                            <Link href="/">
                                <p className="text-white">
                                    Mi cuenta
                                </p>
                            </Link>
                            <Link href="/">
                                <p className="text-white">
                                    Mis pedidos
                                </p>
                            </Link>
                            <Link href="/">
                                <p className="text-white">
                                    Recuperar contraseña
                                </p>
                            </Link>
                        </div>
                    </div> */}
                    <div className="md:col-span-2">
                        <p className="text-white pb-2 font-bold md:pb-6 text-sm">ATENCIÓN AL CLIENTE</p>
                        <div className="text-sm">
                            <Link href="/">
                                <p className="text-white">
                                    Politica de Garantia
                                </p>
                            </Link>
                            <Link href="/">
                                <p className="text-white">
                                    Politica de Cambios
                                </p>
                            </Link>
                            <Link href="/">
                                <p className="text-white">
                                    Politica de Privacidad
                                </p>
                            </Link>
                            <Link href="/">
                                <p className="text-white">
                                    Politica de Cookies
                                </p>
                            </Link>
                            <Link href="/">
                                <p className="text-white">
                                    Politica de Envios
                                </p>
                            </Link>
                            <Link href="/">
                                <p className="text-white">
                                    Modalidades de pago
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <p className="text-white pb-2 font-bold md:pb-6 text-sm">CONTÁCTANOS</p>
                        <div className="text-sm pb-6">
                            <Link href="/">
                                <p className="text-white">
                                    Celular: 954-456-853
                                </p>
                            </Link>
                            <Link href="/">
                                <p className="text-white">
                                    Correo: ontec.perú@gmail.com
                                </p>
                            </Link>
                            
                        </div>
                        <div className="pt-6 md:pt-0">
                            <p className="text-white">MEDIOS DE PAGO</p>
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <FaCcMastercard className="w-10 h-10 text-white" />
                                <RiVisaLine className="w-16 h-16 text-white" />
                            </div>
                        </div>
                    </div>
                    
                </section>
            </div>
        </section>
        <Copyright />
        
    </div>
  )
}
