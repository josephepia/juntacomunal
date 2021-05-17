import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineasAtencionComponent } from './lineas-atencion.component';

const routes: Routes = [{ path: '', component: LineasAtencionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineasAtencionRoutingModule { }
