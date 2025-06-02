export const CtaEmail = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-24">
        <div className="bg-m-orange rounded-xl py-4 px-8 text-white">
            <h2 className=" text-xl font-bold text-center md:text-left">¡Suscríbete AHORA!</h2>
            <p>Y reciben nuestras ofertas exclusivas, solo para subscriptores.</p>
            <div className="flex items-center flex-col md:flex-row gap-4 pt-2">
                <input className="bg-white outline-none rounded-lg py-1 px-4 w-full md:max-w-80  text-black" type="email" placeholder="Ingresa tu email." />
                <button className="bg-m-gray py-1 px-4 rounded-lg w-full md:w-auto cursor-pointer">SUSCRIBIRME</button>
            </div>
        </div>
    </div>
  )
}
