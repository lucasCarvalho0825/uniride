import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridaCreateComponent } from './corrida-create.component';

describe('CorridaCreateComponent', () => {
  let component: CorridaCreateComponent;
  let fixture: ComponentFixture<CorridaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorridaCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorridaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
