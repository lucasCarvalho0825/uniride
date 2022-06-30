import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageiroReadComponent } from './passageiro-read.component';

describe('PassageiroReadComponent', () => {
  let component: PassageiroReadComponent;
  let fixture: ComponentFixture<PassageiroReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassageiroReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassageiroReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
