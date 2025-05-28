import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSpndPage } from './app-spnd.page';

describe('AppSpndPage', () => {
  let component: AppSpndPage;
  let fixture: ComponentFixture<AppSpndPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSpndPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSpndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
