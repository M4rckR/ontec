import Image from "next/image";
import { IoMenuSharp } from "react-icons/io5";

export const HeroMegaMenu = () => {
  return (
    <>
      <nav className="cursor-pointer relative">
        <ul className="flex items-center gap-4">
          <li className="relative group">
            <IoMenuSharp className="w-10 h-10 text-white cursor-pointer" />
            <div className="absolute top-0 left-0 transition opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out z-50 w-auto">
              <ul className="relative left-0 top-14 bg-white shadow-xl">
                <li className="group/sub p-4 min-w-[200px]">
                  <span className="cursor-pointer">Primera opción</span>
                  <div className="absolute left-full top-0 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                    <div className="relative bg-white shadow-xl">
                      <div className="flex flex-col md:flex-row">
                        <ul className="w-[200px]">
                          <li className="hover:bg-gray-100 py-2 px-4">Subopción 1</li>
                          <li className="hover:bg-gray-100 py-2 px-4">Subopción 2</li>
                          <li className="hover:bg-gray-100 py-2 px-4">Subopción 3</li>
                        </ul>
                        <div className="hidden md:block w-[300px] h-[200px] relative">
                          <Image
                            src="https://placehold.co/600x400"
                            fill
                            alt="imagen"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group/sub p-4 min-w-[200px]">
                  <span className="cursor-pointer">Segunda opción</span>
                  <div className="absolute left-full top-0 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                    <div className="relative bg-white border shadow-xl">
                      <div className="flex flex-col md:flex-row">
                        <ul className="w-[200px]">
                          <li className="hover:bg-gray-100 py-2 px-4">Subopción 4</li>
                          <li className="hover:bg-gray-100 py-2 px-4">Subopción 5</li>
                          <li className="hover:bg-gray-100 py-2 px-4">Subopción 6</li>
                        </ul>
                        <div className="hidden md:block w-[300px] h-[200px] relative">
                          <Image
                            src="https://placehold.co/600x400"
                            fill
                            alt="imagen"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};
