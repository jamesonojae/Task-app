import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss'],
})
export class NewListComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}
  createList(listDescription: string, createdDateTime: string) {
    this.taskService
      // .createList('Testing front', '2020-06-23 22:58:00')
      .createList(listDescription, createdDateTime)
      .subscribe(
        (response: any) => {
          console.log(response);
          console.log('Ok');
        },
        (error) => {
          console.log('Bad');
          console.log(error);
        }
      );
  }
}
