import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Oportunidade } from '../../models/task.model';

@Component({
  selector: 'app-lista-oportunidades',
  templateUrl: './lista-oportunidades.page.html',
  styleUrls: ['./lista-oportunidades.page.scss'],
})
export class ListaOportunidadesPage implements OnInit {

  oportunidades$: Observable<Oportunidade[]>;

  constructor() { }

  ngOnInit(): void {
    /*this.oportunidades$ = of([
      { id: 'f8dff8d8', title: 'Aprender Ionic', done: false },
      { id: 'f8dff5a9', title: 'Aprender FireStore', done: false }
    ]);*/
  }

}
