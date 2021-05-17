import { FormularioComponent } from './../../../lineas-atencion/components/formulario/formulario.component';
import { LineasAtencionService } from './../../../../core/services/lineas-atencion.service';
import { MatDialog } from '@angular/material/dialog';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lineas-atencion-list',
  templateUrl: './lineas-atencion-list.component.html',
  styleUrls: ['./lineas-atencion-list.component.scss']
})
export class LineasAtencionListComponent implements OnInit {

  lineasAtencion: any = {}
  lineasAtenciones: any

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private lineasAtencionService: LineasAtencionService
  ) { }

  ngOnInit(): void {
    this.consultarLineasAtencionOnce();
  }
  keys(objeto: Object) {
    return Object.keys(objeto || {})
  }
  //CREATE SERVICE
  modalFormulario() {
    const dialogRef = this.dialog.open(FormularioComponent, { data: { titulo: "Registrar", lineasAtencion: null } });
    dialogRef.afterClosed().subscribe(lineasAtencion => {
      console.log('datos ingresados al crear lineasAtencion', lineasAtencion);
      if (lineasAtencion) {
        // registrar datos en firebase
        this.lineasAtencionService.createLineasAtencion(lineasAtencion)
          .then(() => {
            console.log("lineasAtencion registrada exitosamente");
            this.consultarLineasAtencionOnce();
          })
          .catch((error) => {
            console.log("error al registrar lineasAtencion ", error);
          })
        // this.registrarComuna(comuna)
      }
      //luego de recibir los datos los mandamos a firebase

    });
  }
  //CONSULTAR SERVICE
  consultarLineasAtencionOnce() {
    this.lineasAtencionService.getLineasAtencionOnce().then((lineasAtenciones) => {
      if (lineasAtenciones) {
        console.log('lineasAtenciones segundo then', lineasAtenciones);
      } else {
        console.log('no existen lineasAtenciones');
      }
      this.lineasAtenciones = lineasAtenciones || {}
    })
  }
   //REVISAR
   goToLineasAtencion(lineasAtencion: any) {
    this.router.navigate([lineasAtencion], { relativeTo: this.route });
  }

}
