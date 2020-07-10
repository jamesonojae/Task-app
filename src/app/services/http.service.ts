import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ListModel} from '../models/list.model';
import {TaskModel} from '../models/task.model';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public ROOT_URL = 'http://localhost:3001/api/v1';

  constructor(private http: HttpClient) {
  }


// create list
  createList(path: string, listDetails) {
    return this.http.post(`${this.ROOT_URL}/${path}`, listDetails);
  }
// get list
  getLists(path: string) {
    return this.http.get<ListModel[]>(`${this.ROOT_URL}/${path}`);
  }
  // create task
createTask(path: string, taskDetails){
    return this.http.post(`${this.ROOT_URL}/${path}`, taskDetails);
}
// get Tasks
  getTask(path: string) {
    return this.http.get<TaskModel[]>(`${this.ROOT_URL}/${path}`);
  }
  // completed task
  completedTask(path: string, taskUpdate){
    // return this.http.patch(`${this.ROOT_URL}/${taskId}/updateTask/${path}`,
    return this.http.put(`${this.ROOT_URL}/updateTask/${path}`, taskUpdate);
      // {completed: true});
  }
}
