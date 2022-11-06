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
    name: string
    image: File
    areaId: number
    departmentId: number
}