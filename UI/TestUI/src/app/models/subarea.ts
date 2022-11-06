export interface subarea {
    id: number
    name: string
    areaId: number
    areaName: string
    departmentId: number
    departmentName: string
    image: string
}

export interface menuSubarea {
    id: number
    name: string
}

export interface subareaCreationDTO {
    id: number
    name: string
    areaId: number
    areaName: string
    departmentId: number
    departmentName: string
    image: File
}