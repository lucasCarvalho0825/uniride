import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageiroUpdateComponent } from './passageiro-update.component';

describe('PassageiroUpdateComponent', () => {
  let component: PassageiroUpdateComponent;
  let fixture: ComponentFixture<PassageiroUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassageiroUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassageiroUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
