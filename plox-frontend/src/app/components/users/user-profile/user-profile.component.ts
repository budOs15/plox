import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { Users } from '../../../models/users';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: Users;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId !== null) {
      const numericUserId = +userId; // Converti da stringa a numero
      this.userService.getUserById(numericUserId).subscribe((data: Users) => {
        this.user = data;
      });
    } else {
      console.error("User ID is null");
    }
  }
}
