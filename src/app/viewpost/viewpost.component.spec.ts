import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpostComponent } from './viewpost.component';

describe('ViewpostComponent', () => {
  let component: ViewpostComponent;
  let fixture: ComponentFixture<ViewpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
