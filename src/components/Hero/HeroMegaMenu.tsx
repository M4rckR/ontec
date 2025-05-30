import Image from "next/image";
import { IoMenuSharp } from "react-icons/io5";

export const HeroMegaMenu = () => {
  return (
    <>
      <nav>
        <ul className="flex items-center gap-4">
          <li className="relative group">
            <IoMenuSharp className="w-10 h-10 text-white cursor-pointer" />
            <div className="absolute top-0 left-0 transition  translate-x-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
              <ul className="relative left-0 border py-2 px-4 top-14 bg-white shadow-xl">
                <li className="group/sub">
                  <span className="cursor-pointer">Primera opción</span>
                  <div className="absolute left-full top-0 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                    <div className="relative bg-white border shadow-xl min-w-[200px]">
                      <div className="flex">
                        <ul className="min-w-[200px]">
                          <li className="hover:bg-gray-100 py-2 px-4">Subopción 1</li>
                          <li className="hover:bg-gray-100 py-2 px-4">Subopción 2</li>
                          <li className="hover:bg-gray-100 py-2 px-4">Subopción 3</li>
                        </ul>
                        <Image
                          src="https://placehold.co/600x400"
                          width={600}
                          height={400}
                          alt="imagen"
                          className="block"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group/sub">
                  <span className="cursor-pointer">Primera opción</span>
                  <div className="absolute left-full top-0 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                    <div className="relative bg-white border shadow-xl min-w-[200px]">
                      <div className="flex">
                        <ul className="min-w-[200px]">
                          <li className="hover:bg-gray-100 py-2 px-4">Subopción 1</li>
                          <li className="hover:bg-gray-100 py-2 px-4">Subopción 2</li>
                          <li className="hover:bg-gray-100 py-2 px-4">Subopción 3</li>
                        </ul>
                        <Image
                          src="https://placehold.co/600x400"
                          width={600}
                          height={400}
                          alt="imagen"
                          className="block"
                        />
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
