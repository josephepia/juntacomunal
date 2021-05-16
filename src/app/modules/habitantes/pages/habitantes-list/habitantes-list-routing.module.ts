import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitantesListComponent } from './habitantes-list.component';

const routes: Routes = [{ path: '', component: HabitantesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitantesListRoutingModule { }
