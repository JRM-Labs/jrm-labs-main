import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageApplicationsComponent } from './home-page-applications.component';

describe('HomePageApplicationsComponent', () => {
  let component: HomePageApplicationsComponent;
  let fixture: ComponentFixture<HomePageApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageApplicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
