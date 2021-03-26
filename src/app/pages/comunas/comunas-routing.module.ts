import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunasComponent } from './comunas.component';

const routes: Routes = [{ path: '', component: ComunasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunasRoutingModule { }
