import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavprincipalRoutingModule } from './navprincipal-routing.module';
import { NavprincipalComponent } from './navprincipal.component';


@NgModule({
  declarations: [NavprincipalComponent],
  imports: [
    CommonModule,
    NavprincipalRoutingModule
  ]
})
export class NavprincipalModule { }
