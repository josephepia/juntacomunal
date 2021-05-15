import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConveniosComponent } from './convenios.component';

const routes: Routes = [{ path: '', component: ConveniosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConveniosRoutingModule { }
