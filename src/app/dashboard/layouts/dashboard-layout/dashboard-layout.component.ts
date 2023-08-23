import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styles: [],
})
export class DashboardLayoutComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  public user = computed(() => this.authService.currentUser());

  onLogout() {
    this.authService.logout();
  }
}
