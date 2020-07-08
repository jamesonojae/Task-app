import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {TaskModel} from '../../models/task.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  private listId: any;

  constructor(private httpService: HttpService,
              private route: ActivatedRoute) { }
  newTask: TaskModel = new TaskModel();
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // console.log(params);
       this.listId = params.listId;

    });
  }

  createTask() {
    // console.log(this.newTask, this.listId);
    this.newTask.listId = this.listId;
    // this.httpService.createTask(`lists/createTask${this.listId}`, this.newTask).subscribe(  // this get the list id from the route
    this.httpService.createTask('lists/createTask', this.newTask).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
