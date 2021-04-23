import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuntasListComponent } from './juntas-list.component';

const routes: Routes = [{ path: '', component: JuntasListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuntasListRoutingModule { }
