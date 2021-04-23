import { MatIconModule } from '@angular/material/icon';
import { MaterialModule  } from './../../../../shared/modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule
  ]
})
export class LoginModule { }
