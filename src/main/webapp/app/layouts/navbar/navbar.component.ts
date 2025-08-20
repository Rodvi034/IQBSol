import { Component, OnInit, inject, HostListener } from '@angular/core'; // HostListener eklendi
import { Router, RouterModule } from '@angular/router';
import SharedModule from 'app/shared/shared.module';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';
import { ProfileService } from 'app/layouts/profiles/profile.service';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'app/login/login.service';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'jhi-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [RouterModule, SharedModule, NgbCollapseModule, NgbDropdownModule, FaIconComponent, CommonModule],
})
export class NavbarComponent implements OnInit {
  inProduction?: boolean;
  isNavbarCollapsed = true;
  openAPIEnabled?: boolean;
  account: Account | null = null;
  isScrolled = false; // Kaydırma durumunu tutacak yeni değişken

  private loginService = inject(LoginService);
  private accountService = inject(AccountService);
  private profileService = inject(ProfileService);
  private router = inject(Router);

  // Sayfa kaydırıldığında bu fonksiyon çalışacak
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Eğer 100 pikselden fazla aşağı kaydırıldıysa isScrolled true olur
    this.isScrolled = window.pageYOffset > 100;
  }

  ngOnInit(): void {
    this.profileService.getProfileInfo().subscribe(profileInfo => {
      this.inProduction = profileInfo.inProduction;
      this.openAPIEnabled = profileInfo.openAPIEnabled;
    });
    this.accountService.getAuthenticationState().subscribe(account => {
      this.account = account;
    });
  }

  collapseNavbar(): void {
    this.isNavbarCollapsed = true;
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  logout(): void {
    this.collapseNavbar();
    this.loginService.logout();
    this.router.navigate(['']);
  }
}
