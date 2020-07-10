import { Component, OnInit } from '@angular/core';
import {ListModel} from '../../models/list.model';
import {HttpService} from '../../services/http.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss'],
})
export class NewListComponent implements OnInit {

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) {}
  newList: ListModel = new ListModel();
  ngOnInit(): void {}

  createNewList() {
    this.httpService.createList(`lists/createList`, this.newList).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/lists' ], {relativeTo: this.route});
      },
      err => {
        console.log(err);
      }
    );
    // console.log(this.newList);
  }
}
