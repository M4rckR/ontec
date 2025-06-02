import Image from "next/image"
import Link from "next/link"


export const Gallery = () => {
  return (
    <div className="mx-auto max-w-7xl container py-8 md:py-16 lg:py-24 px-4">
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <Link className="col-span-full hidden md:block" href={"XD"}>
                <Image
                    src={"/images/gallery/gallery-1.jpg"}
                    alt="Gallery 1"
                    width={500}
                    height={500}
                    unoptimized
                    className="w-full h-full object-cover rounded-xl"
                />
            </Link>
            <Link className="col-span-2 md:col-start-1 md:col-end-3 lg:block lg:col-start-1 lg:col-end-3" href={"#"}>
                <Image
                    src={"/images/gallery/gallery-2.jpg"}
                    alt="Gallery 2"
                    width={500}
                    height={500}
                    unoptimized
                    className="w-full h-full object-cover rounded-xl"
                />
            </Link>
            <Link className="md:hidden lg:block" href={"#"}>
                <Image
                    src={"/images/gallery/gallery-3.jpg"}
                    alt="Gallery 3"
                    width={500}
                    height={500}
                    unoptimized
                    className="w-full h-full object-cover rounded-xl"
                />
            </Link>
            <Link className="col-start-2 col-end-3 sm:hidden md:block md:col-start-3 md:col-end-4 lg:col-start-4 lg:col-end-5" href={"#"}>
                <Image
                    src={"/images/gallery/gallery-4.jpg"}
                    alt="Gallery 4"
                    width={500}
                    height={500}
                    unoptimized
                    className="w-full h-full object-cover rounded-xl"
                />
            </Link>
        </section>
    </div>
  )
}
