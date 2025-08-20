import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, NgFor } from '@angular/common';

import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';
import { ProfileService } from 'app/layouts/profiles/profile.service';
import { ProfileInfo } from 'app/layouts/profiles/profile-info.model';

@Component({
  selector: 'jhi-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [RouterLink, TranslateModule, NgIf, NgFor],
})
export class NavbarComponent implements OnInit {
  private readonly accountService = inject(AccountService);
  private readonly profileService = inject(ProfileService);

  profileInfo: ProfileInfo | null = null;
  private currentAccount: Account | null = null;

  ngOnInit(): void {
    this.profileService.getProfileInfo().subscribe(info => {
      this.profileInfo = info;
    });

    // userIdentity signal’ını yakalıyoruz
    this.currentAccount = this.accountService.getAuthenticatedUser()();
    // parantez () -> signal değerini okumak için
  }

  account(): Account | null {
    return this.currentAccount;
  }

  // testlerde kullanabilmen için
  authenticate(account: Account | null): void {
    this.accountService.authenticate(account);
    this.currentAccount = account;
  }
}
