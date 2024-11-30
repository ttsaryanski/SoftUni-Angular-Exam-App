import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../types/user';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private userService: UserService, private router: Router) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get name(): string {
    return this.userService.user?.username || '';
  }

  logout(event: Event) {
    event.preventDefault();

    this.userService.logout().subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
