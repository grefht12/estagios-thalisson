import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ListaOportunidadesPage } from './lista-oportunidades.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: ListaOportunidadesPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaOportunidadesPage]
})
export class ListaOportunidadesPageModule {}
