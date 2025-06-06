import { z } from "zod"

export const formSearchSchema = z.object({
    searchText: z.string().min(12, { message: 'El campo es requerido' })
})



export const productSchema = z.object({
    id: z.string(),
    name: z.string(),
    priceStart: z.number(),
    priceFinal: z.number(),
    image: z.string(),
    discount: z.number().optional(),
})