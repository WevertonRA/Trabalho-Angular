import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExServer } from '../model/ex';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExsService {

  constructor(private http: HttpClient,) { }

  url = environment.urlServer;

  create(value: ExServer): Observable<ExServer> {
    return this.http.post<ExServer>(`${this.url}/list`, value)
  }

  update(value: ExServer): Observable<ExServer> {
    return this.http.put<ExServer>(`${this.url}/list/${value.id}`, value)
  }

  delete(value: ExServer): Observable<ExServer> {
    return this.http.delete<ExServer>(`${this.url}/list/${value.id}`)
  }

  findAll(): Observable<Array<ExServer>> {
    return this.http.get<Array<ExServer>>(`${this.url}/list`)
  }

  findById(id: any): Observable<ExServer> {
    return this.http.get<ExServer>(`${this.url}/list/${id}`)
  }
}
