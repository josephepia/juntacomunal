import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiembroComponent } from './miembro.component';

const routes: Routes = [{ path: '', component: MiembroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiembroRoutingModule { }
