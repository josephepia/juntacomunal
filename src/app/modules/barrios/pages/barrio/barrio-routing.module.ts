import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrioComponent } from './barrio.component';

const routes: Routes = [{ path: '', component: BarrioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarrioRoutingModule { }
