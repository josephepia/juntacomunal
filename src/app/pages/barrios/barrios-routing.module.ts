import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarriosComponent } from './barrios.component';

const routes: Routes = [{ path: '', component: BarriosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarriosRoutingModule { }
