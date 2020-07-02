import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
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
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      // to get all task under a list
      this.taskService.getTasks(params.listId).subscribe((tasks: any) => {
        this.tasks = tasks;
      });
    });
    this.taskService.getLists().subscribe((lists: any[]) => {
      //  console.log(lists);
      this.lists = lists;
    });
  }

  // this is to get task after App loading using listId
  getTasks(listId) {
    this.taskService.getTasks(listId).subscribe((listTasks: any[]) => {
      this.listTasks = listTasks;
      // console.log(listTasks);
    });
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
