import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolComponent } from './rol.component';

const routes: Routes = [{ path: '', component: RolComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolRoutingModule { }
