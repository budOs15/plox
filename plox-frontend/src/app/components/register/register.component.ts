import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../../models/users';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: Users = new Users();
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    if (this.user.userPassword !== this.confirmPassword) {
      this.errorMessage = 'Le password non coincidono';
      return;
    }

    this.authService.register(this.user).subscribe({
      next: (response) => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.errorMessage = 'Registrazione fallita';
      }
    });
  }
}