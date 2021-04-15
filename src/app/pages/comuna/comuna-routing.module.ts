import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunaComponent } from './comuna.component';

const routes: Routes = [{ path: '', component: ComunaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunaRoutingModule { }
