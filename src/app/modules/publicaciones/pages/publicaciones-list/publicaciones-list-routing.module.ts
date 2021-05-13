import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicacionesListComponent } from './publicaciones-list.component';

const routes: Routes = [{ path: '', component: PublicacionesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicacionesListRoutingModule { }
