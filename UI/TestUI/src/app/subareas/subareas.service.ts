import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { subarea, subareaCreationDTO } from '../models/subarea';

@Injectable({
  providedIn: 'root'
})
export class SubareasService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'subareas'

  public getAll():Observable<subarea[]>{
    return this.http.get<subarea[]>(this.apiURL)
  }

  public add(subarea: subareaCreationDTO):Observable<subareaCreationDTO>{
    return this.http.post<subareaCreationDTO>(this.apiURL, subarea)
  }

  public getById(id: number):Observable<subarea>{
    return this.http.get<subarea>(`${this.apiURL}/${id}`)
  }

  public edit(id: number, subarea: subareaCreationDTO):Observable<subareaCreationDTO>{
    return this.http.put<subareaCreationDTO>(`${this.apiURL}/${id}`, subarea)
  }

  public delete(id: number):Observable<subarea>{
    return this.http.delete<subarea>(`${this.apiURL}/${id}`)
  }
}
