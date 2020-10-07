import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PComponenteComponent } from './p-componente.component';

describe('PComponenteComponent', () => {
  let component: PComponenteComponent;
  let fixture: ComponentFixture<PComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
