import { FormularioMiembroComponent } from './../../components/formulario-miembro/formulario-miembro.component';
import { FormularioJuntaComponent } from './../../components/formulario-junta/formulario-junta.component';
import { MiembroJACService } from './../../../../core/services/miembro-jac.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
@Component({
  selector: 'app-miembros-list',
  templateUrl: './miembros-list.component.html',
  styleUrls: ['./miembros-list.component.scss']
})
export class MiembrosListComponent implements OnInit {

  miembros: any
  miembro: any = {}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private miembroService: MiembroJACService
  ) { }

  ngOnInit(): void {
    this.consultarMiembrosOnce();
  }

  keys(objeto: Object) {
    return Object.keys(objeto || {})
  }
  //CREATE SERVICE
  modalFormulario() {
    //aca no se puede mandar nada al formulario ya que se va a crear uno nuevo
    const dialogRef = this.dialog.open(FormularioMiembroComponent, { data: { titulo: "Registrar", miembro: null }, panelClass: ['row', 'margin-0', 'col-sm-8', 'col-md-4', 'col-lg-4'] });

    dialogRef.afterClosed().subscribe(miembro => {
      console.log('datos ingresados al crear Miembro', miembro);
      if (miembro) {
        // registrar datos en firebase
        // registrar datos en firebase
        this.miembroService.createMiembro(miembro)
          .then(() => {
            console.log("Miembro registrado exitosamente");
            this.consultarMiembrosOnce();
          })
          .catch((error) => {
            console.log("error al registrar Barrio ", error);

          })

        //this.registrarMiembro(miembro)

      }
      //luego de recibir los datos los mandamos a firebase

    });
  }
  consultarMiembrosOn() {
    console.log('datos devueltos por el metodo consultar Miembrosason ', this.miembroService.getMiembrosOn());
  }
  consultarMiembrosOnce() {
    this.miembroService.getMiembrosOnce().then((miembros) => {
      if (miembros) {
        console.log('miembros segundo then', miembros);
      } else {
        console.log('no existen miembros');
      }
      this.miembros = miembros || {}
    })
  }

  //Revisar esto
  registrarMiembro(datos: any) {
    firebase.database()
      .ref('MiembrosJAC/').push(datos)
      .then(() => {
        console.log("registrada correctamente")
      })
      .catch((error) => console.log("ocurrio un error al registrar ->", error))
  }
  goToMiembro(miembro:any) {
    this.router.navigate([miembro], { relativeTo: this.route });
  }

}
