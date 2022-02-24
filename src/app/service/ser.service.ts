import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { vm } from './interface.vm';

const url='https://jsonplaceholder.typicode.com/comments';

@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor( private http:HttpClient) { }
  todos():Observable<vm>{
    return this.http.get<vm>(url);
  }
}
