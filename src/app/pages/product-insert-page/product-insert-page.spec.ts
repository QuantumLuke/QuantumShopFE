import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInsertPage } from './product-insert-page';

describe('ProductInsertPage', () => {
  let component: ProductInsertPage;
  let fixture: ComponentFixture<ProductInsertPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductInsertPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductInsertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
