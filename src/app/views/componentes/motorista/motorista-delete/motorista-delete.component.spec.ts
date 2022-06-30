import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoristaDeleteComponent } from './motorista-delete.component';

describe('MotoristaDeleteComponent', () => {
  let component: MotoristaDeleteComponent;
  let fixture: ComponentFixture<MotoristaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoristaDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotoristaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
