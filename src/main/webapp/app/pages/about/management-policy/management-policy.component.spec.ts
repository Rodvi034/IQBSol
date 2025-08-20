import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementPolicyComponent } from './management-policy.component';

describe('ManagementPolicyComponent', () => {
  let component: ManagementPolicyComponent;
  let fixture: ComponentFixture<ManagementPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
