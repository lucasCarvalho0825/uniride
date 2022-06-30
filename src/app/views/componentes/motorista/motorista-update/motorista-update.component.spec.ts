import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoristaUpdateComponent } from './motorista-update.component';

describe('MotoristaUpdateComponent', () => {
  let component: MotoristaUpdateComponent;
  let fixture: ComponentFixture<MotoristaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoristaUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotoristaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
