import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeplateDrivenFormComponent } from './teplate-driven-form.component';

describe('TeplateDrivenFormComponent', () => {
  let component: TeplateDrivenFormComponent;
  let fixture: ComponentFixture<TeplateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeplateDrivenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
