import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  lists: any[];
  tasks: any[];
  listTasks: any[];

  constructor(

  ) {}

  ngOnInit() {
  }

  // this used to hard code a post request to the backend

  // createNewList() {
  //   this.taskService
  //     .createList('Testing front', '2020-06-23 22:58:00')
  //     .subscribe(
  //       (response: any) => {
  //         console.log(response);
  //         console.log('Ok');
  //       },
  //       (error) => {
  //         console.log('Bad');
  //         console.log(error);
  //       }
  //     );
  // }
}
