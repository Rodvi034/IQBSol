import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

import { ProfileInfo } from 'app/layouts/profiles/profile-info.model';
import { Account } from 'app/core/auth/account.model';
import { AccountService } from 'app/core/auth/account.service';
import { ProfileService } from 'app/layouts/profiles/profile.service';
import { LoginService } from 'app/login/login.service';

import { NavbarComponent } from './navbar.component';

describe('Navbar Component', () => {
  let comp: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let accountService: AccountService;
  let profileService: ProfileService;

  const account: Account = {
    activated: true,
    authorities: [],
    email: '',
    firstName: 'John',
    langKey: '',
    lastName: 'Doe',
    login: 'john.doe',
    imageUrl: '',
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NavbarComponent, TranslateModule.forRoot()],
      providers: [provideHttpClient(), provideHttpClientTesting(), LoginService],
    })
      .overrideTemplate(NavbarComponent, '')
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    comp = fixture.componentInstance;
    accountService = TestBed.inject(AccountService);
    profileService = TestBed.inject(ProfileService);
  });

  it('should call profileService.getProfileInfo on init', () => {
    jest.spyOn(profileService, 'getProfileInfo').mockReturnValue(of(new ProfileInfo()));

    comp.ngOnInit();

    expect(profileService.getProfileInfo).toHaveBeenCalled();
  });

  it('should hold current authenticated user in variable account', () => {
    comp.ngOnInit();

    expect(comp.account()).toBeNull();

    comp.authenticate(account);

    expect(comp.account()).toEqual(account);

    comp.authenticate(null);

    expect(comp.account()).toBeNull();
  });

  it('should hold current authenticated user in variable account if user is authenticated before page load', () => {
    comp.authenticate(account);

    comp.ngOnInit();

    expect(comp.account()).toEqual(account);

    comp.authenticate(null);

    expect(comp.account()).toBeNull();
  });
});
