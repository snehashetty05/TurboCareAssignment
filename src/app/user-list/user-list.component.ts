import { Component, OnInit } from '@angular/core';
import { userList } from '../user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users =userList;
  searchText = '';
  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  

}
