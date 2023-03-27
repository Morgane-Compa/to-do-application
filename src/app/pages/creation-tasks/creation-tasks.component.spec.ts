import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationTasksComponent } from './creation-tasks.component';

describe('CreationTasksComponent', () => {
  let component: CreationTasksComponent;
  let fixture: ComponentFixture<CreationTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
