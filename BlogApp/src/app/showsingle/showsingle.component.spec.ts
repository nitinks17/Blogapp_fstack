import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsingleComponent } from './showsingle.component';

describe('ShowsingleComponent', () => {
  let component: ShowsingleComponent;
  let fixture: ComponentFixture<ShowsingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
