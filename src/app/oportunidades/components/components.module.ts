import { NgModule } from '@angular/core';

import { ListaOportunidadesComponent } from './lista-oportunidades/lista-oportunidades.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListaOportunidadesComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ListaOportunidadesComponent
  ]
})
export class ComponentsModule { }
