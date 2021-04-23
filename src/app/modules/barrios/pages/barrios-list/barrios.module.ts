import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { BarriosRoutingModule } from './barrios-routing.module';
import { BarriosComponent } from './barrios.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';




import {MatIconModule} from '@angular/material/icon';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

//import { FormularioComunaComponent } from 'src/app/components/formulario-comuna/formulario-comuna.component';



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
