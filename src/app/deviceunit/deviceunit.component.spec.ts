import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceunitComponent } from './deviceunit.component';

describe('DeviceunitComponent', () => {
  let component: DeviceunitComponent;
  let fixture: ComponentFixture<DeviceunitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceunitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
