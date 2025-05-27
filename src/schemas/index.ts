import { z } from "zod"

export const formSearchSchema = z.object({
    searchText: z.string().min(12, { message: 'El campo es requerido' })
})



