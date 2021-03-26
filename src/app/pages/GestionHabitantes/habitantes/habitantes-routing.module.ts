import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitantesComponent } from './habitantes.component';

const routes: Routes = [{ path: '', component: HabitantesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitantesRoutingModule { }
