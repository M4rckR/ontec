import { IoMenuSharp } from "react-icons/io5";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";

export const HeroMegaMenu = () => {
  return (
      <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
            <NavigationMenuTrigger className="w-10 h-10">
                <IoMenuSharp className="w-full h-full text-white cursor-pointer"/>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
                <NavigationMenuLink className="border-b px-4 py-4 font-semibold text-xs cursor-pointer hover:bg-gray-50 transition-all duration-150">LINK</NavigationMenuLink>
                <NavigationMenuLink className="border-b px-4 py-4 font-semibold text-xs cursor-pointer hover:bg-gray-50 transition-all duration-150">OPCIONES</NavigationMenuLink>
                <NavigationMenuLink className="px-4 py-4 font-semibold text-xs cursor-pointer hover:bg-gray-50 transition-all duration-150">OPERACIONES</NavigationMenuLink>
            </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  );
};
