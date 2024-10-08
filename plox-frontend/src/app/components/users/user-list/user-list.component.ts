import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Users } from '../../../models/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Users[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: Users[]) => {
      this.users = data;
    });
  }
}