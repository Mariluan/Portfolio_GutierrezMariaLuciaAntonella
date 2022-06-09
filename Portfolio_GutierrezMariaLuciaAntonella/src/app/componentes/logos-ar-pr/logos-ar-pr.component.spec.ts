import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosArPrComponent } from './logos-ar-pr.component';

describe('LogosArPrComponent', () => {
  let component: LogosArPrComponent;
  let fixture: ComponentFixture<LogosArPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogosArPrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogosArPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
