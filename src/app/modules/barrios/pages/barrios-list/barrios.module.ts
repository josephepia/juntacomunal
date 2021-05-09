import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { BarriosRoutingModule } from './barrios-routing.module';
import { BarriosComponent } from './barrios.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
@NgModule({
  declarations: [BarriosComponent],
  imports: [
    CommonModule,
    BarriosRoutingModule,
    MatGridListModule,
    MaterialModule
  ],
  entryComponents: [
    //FormularioComunaComponent
  ]
})
export class BarriosModule { }
