import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunaRoutingModule } from './comuna-routing.module';
import { ComunaComponent } from './comuna.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';



@NgModule({
  declarations: [ComunaComponent],
  imports: [
    CommonModule,
    ComunaRoutingModule,
    MaterialModule
  ]
})
export class ComunaModule { }
