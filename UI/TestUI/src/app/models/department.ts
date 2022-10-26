import { area, menuArea } from "./area"

export interface department{
    id: number
    name: string
}

export interface menuDepartment{
    id: number
    name: string
    areas: menuArea[]
}