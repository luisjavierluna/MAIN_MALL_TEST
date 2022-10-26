import { menuSubarea, subarea } from "./subarea"

export interface area{
    id: number
    name: string
    departmentId: number
    departmentName: string
}

export interface menuArea{
    id: number
    name: string
    subareas: menuSubarea[]
}