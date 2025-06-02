import { TbTruckDelivery } from "react-icons/tb";
import { GrPersonalComputer } from "react-icons/gr";
import { PiSealCheckBold } from "react-icons/pi";


export const TrustIndicators = () => {
  return (
    <div className="border-t border-black">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 md:gap-4">
        <div className="flex items-center md:justify-center py-4 md:py-6 md:border-r border-black pl-8 md:pl-0">
          <div className="flex-shrink-0">
            <TbTruckDelivery className="w-12 h-12 text-m-blue-main" />
          </div>
          <div className="ml-4">
            <p className="text-m-blue-main font-bold">Envíos a todo el Perú</p>
            <p className="text-sm">Llevamos tus productos hasta tu casa</p>
          </div>
        </div>
        
        <div className="flex items-center md:justify-center py-4 md:py-6 pl-8 md:pl-0">
          <div className="flex-shrink-0">
            <PiSealCheckBold className="w-12 h-12 text-m-blue-main" />
          </div>
          <div className="ml-4">
            <p className="text-m-blue-main font-bold">Compras seguras</p>
            <p className="text-sm">Tus compras son 100% protegidas</p>
          </div>
        </div>

        <div className="flex items-center md:justify-center py-4 md:py-6 md:border-l border-black pl-8 md:pl-0">
          <div className="flex-shrink-0">
            <GrPersonalComputer className="w-12 h-12 text-m-blue-main" />
          </div>
          <div className="ml-4">
            <p className="text-m-blue-main font-bold">Garantía</p>
            <p className="text-sm">Productos con garantía</p>
          </div>
        </div>
      </div>
    </div>
  )
}

