import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Oportunidade } from '../../models/task.model';

@Component({
  selector: 'app-lista-oportunidades',
  templateUrl: './lista-oportunidades.component.html',
  styleUrls: ['./lista-oportunidades.component.scss'],
})
export class ListaOportunidadesComponent {
  @Input() oportunidade: Oportunidade;
  @Output() done = new EventEmitter<Oportunidade>();
  @Output() update = new EventEmitter<Oportunidade>();
  @Output() delete = new EventEmitter<Oportunidade>();
}
