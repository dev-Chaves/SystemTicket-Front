import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SidebarComponent implements OnInit {
  isAdmin: boolean = false; // This should be set based on user role

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Here you would typically check the user's role
    // For example:
    // this.isAdmin = this.authService.isAdmin();
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    this.authService.logout();
  }
} 