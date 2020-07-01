import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webReqService: WebRequestService) {}

  // decleare the king of the data and data type the backend will be expecting
  createList(listDescription: string, createdDateTime: string) {
    // to send a web request to create a list
    return this.webReqService.post('tasks/createList', {
      listDescription,
      createdDateTime,
    });
  }
}
