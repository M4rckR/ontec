import { formSearchSchema, productSchema } from "@/schemas"
import { z } from "zod"

export type formSearch = z.infer<typeof formSearchSchema>
export type product = z.infer<typeof productSchema>