import { Component, OnInit } from '@angular/core';
import {PostsService} from 'src/app/posts.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
lists:any;
pageSize=25;
page = 1;
  constructor(private post:PostsService) { }

  ngOnInit(): void {
    this.post.getAll().subscribe(data =>
      {
        console.log(data);
        this.lists=data;

      })
  }

}
