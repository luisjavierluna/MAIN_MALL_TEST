import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'departments'

  public getAll():Observable<department[]>{
    return this.http.get<department[]>(this.apiURL)
  }

  public add(department: department):Observable<department>{
    return this.http.post<department>(this.apiURL, department)
  }
}
