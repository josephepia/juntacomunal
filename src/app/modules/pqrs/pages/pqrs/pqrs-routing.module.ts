import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PqrsComponent } from './pqrs.component';

const routes: Routes = [{ path: '', component: PqrsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PqrsRoutingModule { }
