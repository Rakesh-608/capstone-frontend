import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SosPageComponent } from './sos-page.component';

describe('SosPageComponent', () => {
  let component: SosPageComponent;
  let fixture: ComponentFixture<SosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SosPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
