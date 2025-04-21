import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliasBridgePage } from './alias-bridge.page';

describe('AliasBridgePage', () => {
  let component: AliasBridgePage;
  let fixture: ComponentFixture<AliasBridgePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AliasBridgePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AliasBridgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
