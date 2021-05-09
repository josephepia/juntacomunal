import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PqrsListComponent } from './pqrs-list.component';

const routes: Routes = [{ path: '', component: PqrsListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PqrsListRoutingModule { }
