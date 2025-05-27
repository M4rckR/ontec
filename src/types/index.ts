import { formSearchSchema } from "@/schemas"
import { z } from "zod"

export type formSearch = z.infer<typeof formSearchSchema>