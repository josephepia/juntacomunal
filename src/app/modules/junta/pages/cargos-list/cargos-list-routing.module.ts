import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargosListComponent } from './cargos-list.component';

const routes: Routes = [{ path: '', component: CargosListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargosListRoutingModule { }
