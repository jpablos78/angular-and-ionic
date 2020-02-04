import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIonicComponent } from './home-ionic.component';

describe('HomeIonicComponent', () => {
  let component: HomeIonicComponent;
  let fixture: ComponentFixture<HomeIonicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIonicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
