'use client'
import { formSearch } from "@/types"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSearchSchema } from "@/schemas"
import { 
    Form, 
    FormControl, 
    FormField, 
    FormItem 
} from "../ui/form"
import { IoMdSearch } from "react-icons/io";
import { Input } from "../ui/input"


export const HeroFormSearch = () => {

 const form = useForm<formSearch>({
    resolver: zodResolver(formSearchSchema),
    defaultValues: {
        searchText: ''
    }
 })

  return (
    <Form {...form}>
        <form className="w-full">
            <FormField
                control={form.control}
                name='searchText'
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <div className="relative">
                                <Input className="bg-white outline-none border-none focus-visible:ring-0 rounded-none" placeholder="¿Qué producto estás buscando?" {...field}/>
                                <IoMdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"/>
                            </div>
                        </FormControl>
                    </FormItem>
                )}
            />
        </form>
    </Form>
  )
}
