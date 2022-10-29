import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsComponent } from './als.component';

describe('AlsComponent', () => {
  let component: AlsComponent;
  let fixture: ComponentFixture<AlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
