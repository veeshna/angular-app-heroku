import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiyFirstAidComponent } from './diy-first-aid.component';

describe('DiyFirstAidComponent', () => {
  let component: DiyFirstAidComponent;
  let fixture: ComponentFixture<DiyFirstAidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiyFirstAidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiyFirstAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
