import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { area } from '../models/area';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'areas'

  public getAll():Observable<area[]>{
    return this.http.get<area[]>(this.apiURL)
  }
}