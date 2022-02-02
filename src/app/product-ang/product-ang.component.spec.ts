import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAngComponent } from './product-ang.component';

describe('ProductAngComponent', () => {
  let component: ProductAngComponent;
  let fixture: ComponentFixture<ProductAngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
