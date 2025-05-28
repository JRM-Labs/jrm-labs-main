import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliasBridgeAuthPage } from './alias-bridge-auth.page';

describe('AliasBridgeAuthPage', () => {
  let component: AliasBridgeAuthPage;
  let fixture: ComponentFixture<AliasBridgeAuthPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AliasBridgeAuthPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AliasBridgeAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
