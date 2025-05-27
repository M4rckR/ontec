import { HeroFormSearch } from "./HeroFormSearch";
import { HeroMegaMenu } from "./HeroMegaMenu";

export const HeroNav = () => {
  return (
    <div className="bg-m-blue-main">
        <section className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex items-center gap-6 w-4/6"> 
                <HeroMegaMenu />
                
                <p>Logo</p>
                <HeroFormSearch/>
            </nav>
        </section>
    </div>
  )
}
 