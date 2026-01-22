import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCommmentsModalComponent } from './task-commments-modal.component';

describe('TaskCommmentsModalComponent', () => {
  let component: TaskCommmentsModalComponent;
  let fixture: ComponentFixture<TaskCommmentsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCommmentsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCommmentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
