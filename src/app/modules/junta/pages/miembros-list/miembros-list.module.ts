import { FormularioJuntaComponent } from './../../components/formulario-junta/formulario-junta.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiembrosListRoutingModule } from './miembros-list-routing.module';
import { MiembrosListComponent } from './miembros-list.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
@NgModule({
  declarations: [
    MiembrosListComponent
   
  ],
  imports: [
    CommonModule,
    MiembrosListRoutingModule,
    MaterialModule
  ]
})
export class MiembrosListModule { }
