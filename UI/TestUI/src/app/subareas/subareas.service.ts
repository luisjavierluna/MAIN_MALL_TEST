import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { subarea } from '../models/subarea';

@Injectable({
  providedIn: 'root'
})
export class SubareasService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'subareas'

  public getAll():Observable<subarea[]>{
    return this.http.get<subarea[]>(this.apiURL)
  }
}
