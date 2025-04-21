import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMarketingPageComponent } from './product-marketing-page.component';

describe('ProductMarketingPageComponent', () => {
  let component: ProductMarketingPageComponent;
  let fixture: ComponentFixture<ProductMarketingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductMarketingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMarketingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
