import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTopNavbarComponent } from './user-top-navbar.component';

describe('UserTopNavbarComponent', () => {
  let component: UserTopNavbarComponent;
  let fixture: ComponentFixture<UserTopNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTopNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTopNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
