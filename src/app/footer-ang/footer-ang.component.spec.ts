import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAngComponent } from './footer-ang.component';

describe('FooterAngComponent', () => {
  let component: FooterAngComponent;
  let fixture: ComponentFixture<FooterAngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
