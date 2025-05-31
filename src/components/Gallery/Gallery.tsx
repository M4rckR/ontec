import Image from "next/image"
import Link from "next/link"


export const Gallery = () => {
  return (
    <div className="mx-auto max-w-7xl container py-8 md:py-16 lg:py-24 px-4">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link className="col-span-full " href={"XD"}>
                <Image
                    src={"/images/gallery/gallery-1.jpg"}
                    alt="Gallery 1"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-xl"
                />
            </Link>
            <Link className="lg:col-span-2" href={"#"}>
                <Image
                    src={"/images/gallery/gallery-2.jpg"}
                    alt="Gallery 2"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-xl"
                />
            </Link>
            <Link className="col-start-3 col-span-1" href={"#"}>
                <Image
                    src={"/images/gallery/gallery-3.jpg"}
                    alt="Gallery 3"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-xl"
                />
            </Link>
            <Link className="col-start-4 col-span-1" href={"#"}>
                <Image
                    src={"/images/gallery/gallery-4.jpg"}
                    alt="Gallery 4"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-xl"
                />
            </Link>
        </section>
    </div>
  )
}
