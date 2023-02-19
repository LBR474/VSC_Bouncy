import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncerComponent } from './bouncer.component';

describe('BouncerComponent', () => {
  let component: BouncerComponent;
  let fixture: ComponentFixture<BouncerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouncerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouncerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
