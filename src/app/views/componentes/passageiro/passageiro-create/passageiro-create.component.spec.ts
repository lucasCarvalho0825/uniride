import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageiroCreateComponent } from './passageiro-create.component';

describe('PassageiroCreateComponent', () => {
  let component: PassageiroCreateComponent;
  let fixture: ComponentFixture<PassageiroCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassageiroCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassageiroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
