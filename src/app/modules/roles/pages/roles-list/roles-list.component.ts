import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/core/services/user-auth.service';

import firebase from 'firebase/app';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { NotificacionesService } from 'src/app/core/services/notificaciones.service';
@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss']
})
export class RolesListComponent implements OnInit {

  constructor(
    private auth: UserAuthService,
    public dialog: MatDialog,
   
    private route: ActivatedRoute,
    private router: Router,
    private notiService: NotificacionesService
  ) { }

  roles: any[] = []

  async ngOnInit(){
    await this.auth.loginEmail('super@gmail.com','123123');
    console.log('roles');
    this.consultarRolesOnce();
    //this.consultarRolesOn();
   
    
    
   
  }
//CREATE SERVICE
modalFormulario() {
  const dialogRef = this.dialog.open(FormularioComponent, { data: { titulo: "Registrar", rol: null } });
  dialogRef.afterClosed().subscribe(rol => {
    console.log('datos ingresados al crear rol', rol);
    if (rol) {
      // registrar datos en firebase
      this.auth.agregarRol(rol)
        .then(() => {
          console.log("rol registrada exitosamente");
          this.consultarRolesOnce();
        })
        .catch((error) => {
          console.log("error al registrar rol ", error);
        })
      // this.registrarrol(rol)
    }
    //luego de recibir los datos los mandamos a firebase
  });
}




//CONSULTAR SERVICE ONE
async consultarRolesOnce() {
  this.roles = await this.auth.getRolesOnce()
  console.log("roles ", this.roles);
  
}

consultarRolesOn(){
  this.auth.getRolesOn().then((value) => {
    // resolve() was called
    console.log('value devuelto por roles on ', value);
    
  })
  .catch((error) => {
    // reject() was called
    // Something went wrong while fetching the data.
    // Handle that error here.
    console.log('error devuelo roles on ', error);
    
  });
}




goToRol(rol: any) {
  this.router.navigate([rol], { relativeTo: this.route });
}

}
