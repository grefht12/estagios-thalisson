import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOportunidadesPage } from './lista-oportunidades.page';

describe('ListaOportunidadesPage', () => {
  let component: ListaOportunidadesPage;
  let fixture: ComponentFixture<ListaOportunidadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOportunidadesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOportunidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
