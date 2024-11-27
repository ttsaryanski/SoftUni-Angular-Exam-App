import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../types/user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  name: string = 'Tsvetan';
  isAuthenticated: boolean = true;
}
