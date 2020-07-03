import { Component, OnInit } from '@angular/core';
import {ListModel} from '../../models/list.model';
import {HttpService} from '../../services/http.service';


@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss'],
})
export class NewListComponent implements OnInit {

  constructor(private httpService: HttpService) {}
  newList: ListModel = new ListModel();
  ngOnInit(): void {}

  createNewList() {
    this.httpService.createList(`lists/createList`, this.newList).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
    // console.log(this.newList);
  }
}
