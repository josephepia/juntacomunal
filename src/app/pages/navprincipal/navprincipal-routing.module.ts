import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavprincipalComponent } from './navprincipal.component';

const routes: Routes = [{ path: '', component: NavprincipalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavprincipalRoutingModule { }
