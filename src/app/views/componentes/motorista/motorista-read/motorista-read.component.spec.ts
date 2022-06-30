import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoristaReadComponent } from './motorista-read.component';

describe('MotoristaReadComponent', () => {
  let component: MotoristaReadComponent;
  let fixture: ComponentFixture<MotoristaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoristaReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotoristaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
