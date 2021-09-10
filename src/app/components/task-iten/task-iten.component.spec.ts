import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItenComponent } from './task-iten.component';

describe('TaskItenComponent', () => {
  let component: TaskItenComponent;
  let fixture: ComponentFixture<TaskItenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskItenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskItenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
