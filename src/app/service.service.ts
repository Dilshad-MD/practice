import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dilshad } from './app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private _http: HttpClient) {}

  users(): Observable<Dilshad[]> {
    return this._http.get(
      'https://jsonplaceholder.typicode.com/posts'
    ) as Observable<Dilshad[]>;
  }
}
