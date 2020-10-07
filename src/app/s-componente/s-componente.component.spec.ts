import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SComponenteComponent } from './s-componente.component';

describe('SComponenteComponent', () => {
  let component: SComponenteComponent;
  let fixture: ComponentFixture<SComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
