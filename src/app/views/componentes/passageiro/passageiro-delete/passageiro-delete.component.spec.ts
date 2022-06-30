import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageiroDeleteComponent } from './passageiro-delete.component';

describe('PassageiroDeleteComponent', () => {
  let component: PassageiroDeleteComponent;
  let fixture: ComponentFixture<PassageiroDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassageiroDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassageiroDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
