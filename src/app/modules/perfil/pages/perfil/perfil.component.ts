import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HabitanteService } from 'src/app/core/services/habitante.service';
import { UserAuthService } from 'src/app/core/services/user-auth.service';
import { FormularioComponent } from 'src/app/modules/habitantes/components/formulario/formulario.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private auth: UserAuthService,
    private habitanteService: HabitanteService
  ) { }

  userDatabase: any = {}
  async ngOnInit() {
    this.consultarHabitante()
  }

  async consultarHabitante(){
    this.userDatabase =  (await this.auth.currentUserDatabase()).val()

  }


  modalFormulario() {
    const dialogRef = this.dialog.open(FormularioComponent, { data: { titulo: "Actualizar datos", habitante: this.userDatabase },width: '50%'});

    dialogRef.afterClosed().subscribe(habitante => {
      console.log('datos ingresados al crear peticiones', habitante);
      if (habitante) {
        // registrar datos en firebase
        

        this.habitanteService.updateProfile(habitante)
          .then(() => {
            console.log("peticion registrada exitosamente");
            this.consultarHabitante();

          })
          .catch((error) => {
            console.log("error al registrar peticion ", error);

          })
      }
    });
  }

}
