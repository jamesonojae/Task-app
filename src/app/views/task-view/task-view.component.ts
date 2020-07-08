import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import {ListModel} from '../../models/list.model';
import {HttpService} from '../../services/http.service';
import {TaskModel} from '../../models/task.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  lists: ListModel[] = [];
  tasks: TaskModel[] = [];
  listTasks: any[];
  currentTask;
  currentRoute;

  constructor(private  httpService: HttpService) {}

  ngOnInit() {
    this.getLists();
  }
  // get lists
  getLists(){
    this.httpService.getLists('lists').subscribe(
      res => {
        this.lists = res;
        // console.log(this.lists);
      },
err => {
        console.log(err);
      }
    );
  }
 // get tasks
  getTasks(listId) {
    this.httpService.getTask(`lists/${listId}`).subscribe(
      res => {
        console.log(listId);
        this.tasks = res;
        this.currentTask = listId;
        if (this.currentTask === null){
          window.alert('Select A List');
        }else {
          // send the current id to the next page
          this.currentRoute = `/pages/${this.currentTask}/new-task`;
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
