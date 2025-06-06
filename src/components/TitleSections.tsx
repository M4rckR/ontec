import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type TitleSectionsProps = {
    title: string;
    className?: string;
}

export const TitleSections = ({title, className}: TitleSectionsProps) => {
  return (
    <div className={cn("flex justify-between items-center border-b border-m-gray-light pb-1", className)}>
        <h2 className="text-xl  pb-2 pl-2">{title}</h2>
        <Link href={"/tienda"} className="flex items-center gap-1 group">
            <span className="text-sm text-black group-hover:text-m-orange transition-colors duration-300">Ver todos </span>
            <ArrowRightIcon className="w-4 h-4 group-hover:text-m-orange transition-colors duration-300" />
        </Link>
    </div>
  )
}
