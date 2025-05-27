import { IoMenuSharp } from "react-icons/io5";
import { HeroFormSearch } from "./HeroFormSearch";

export const HeroNav = () => {
  return (
    <div className="bg-m-blue-main">
        <section className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex items-center gap-6 w-4/6"> 
                <IoMenuSharp className="w-10 h-10 text-white cursor-pointer"/>
                <p>Logo</p>
                <HeroFormSearch/>
            </nav>
        </section>
    </div>
  )
}
 