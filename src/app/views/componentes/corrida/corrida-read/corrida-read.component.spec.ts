import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridaReadComponent } from './corrida-read.component';

describe('CorridaReadComponent', () => {
  let component: CorridaReadComponent;
  let fixture: ComponentFixture<CorridaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorridaReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorridaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
