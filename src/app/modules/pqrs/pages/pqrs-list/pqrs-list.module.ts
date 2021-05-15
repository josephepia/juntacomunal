import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { PqrsListRoutingModule } from './pqrs-list-routing.module';
import { PqrsListComponent } from './pqrs-list.component';

import { MaterialModule } from 'src/app/shared/modules/material/material.module';

import localePy from '@angular/common/locales/es-CO';
registerLocaleData(localePy, 'co');
@NgModule({
  declarations: [PqrsListComponent],
  imports: [
    CommonModule,
    PqrsListRoutingModule,
    MaterialModule
  ],
  providers:[
    { provide: LOCALE_ID,useValue: 'co' }
  ]
})
export class PqrsListModule { }
