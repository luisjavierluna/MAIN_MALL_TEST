import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { department, menuDepartment } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'departments'

  private navbarMenuItemsString = 'navbarMenuItems'

  public getAll():Observable<department[]>{
    return this.http.get<department[]>(this.apiURL)
  }

  public getAllMenuDepartments():Observable<menuDepartment[]>{
    return this.http.get<menuDepartment[]>(`${this.apiURL}/${this.navbarMenuItemsString}`)
  }

  public add(department: department):Observable<department>{
    return this.http.post<department>(this.apiURL, department)
  }

  public getById(id: number):Observable<department>{
    return this.http.get<department>(`${this.apiURL}/${id}`)
  }

  public edit(id: number, department: department):Observable<department>{
    return this.http.put<department>(`${this.apiURL}/${id}`, department)
  }

  public delete(id: number):Observable<department>{
    return this.http.delete<department>(`${this.apiURL}/${id}`)
  }
}
