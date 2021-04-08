import { MatButtonModule } from '@angular/material/button';
import { HomeModule } from './../home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavprincipalRoutingModule } from './navprincipal-routing.module';
import { NavprincipalComponent } from './navprincipal.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
   NavprincipalComponent
  ],
  imports: [
    CommonModule,
    NavprincipalRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
    NavprincipalComponent
  ]
})
export class NavprincipalModule { }
