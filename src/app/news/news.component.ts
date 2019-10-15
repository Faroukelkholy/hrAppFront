import { Component, OnInit,Input } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input() access_token: string;
  @Input() posts: any;
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
