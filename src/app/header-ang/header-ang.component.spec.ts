import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAngComponent } from './header-ang.component';

describe('HeaderAngComponent', () => {
  let component: HeaderAngComponent;
  let fixture: ComponentFixture<HeaderAngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
