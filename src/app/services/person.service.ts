import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';



const baseUrl = "http://cdogan.info:5000/api/members";

@Injectable()
export class PersonService {

  constructor(private http : HttpClient) { }

  hepsiniBul(): Observable<any>{
return this.http.get<any>(baseUrl);
  }
  biriniBul(a): Observable<any>{
    return this.http.get<any>(`${baseUrl}/${a}`);
  }
}
