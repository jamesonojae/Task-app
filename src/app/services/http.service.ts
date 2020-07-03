import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public ROOT_URL = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) {
  }


// create list
  createList(path: string, listDetails) {
    return this.http.post(`${this.ROOT_URL}/${path}`, listDetails);
  }

  // get list
  /*getTask(path:string,){
    return this.http.get<>(`${this.ROOT_URL}/${path}`);
  }*/
}
