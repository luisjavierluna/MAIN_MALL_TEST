import { subareas } from "./subarea"

export interface area{
    id: number
    name: string
    departmentId: number
    departmentName: string
    subareas: subareas[]
}