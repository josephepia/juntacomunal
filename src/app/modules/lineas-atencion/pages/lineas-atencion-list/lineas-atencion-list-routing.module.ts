import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineasAtencionListComponent } from './lineas-atencion-list.component';

const routes: Routes = [{ path: '', component: LineasAtencionListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineasAtencionListRoutingModule { }
