import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HabitanteService } from './../../../../core/services/habitante.service';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from './../../components/formulario/formulario.component';


@Component({
  selector: 'app-habitantes-list',
  templateUrl: './habitantes-list.component.html',
  styleUrls: ['./habitantes-list.component.scss']
})
export class HabitantesListComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
 

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private habitanteService: HabitanteService
  ){}

  habitantes_list:any

  consultarHabitantesOnce(){
    this.habitanteService.getHabitantesOnce().then((habitante)=>{
     if(habitante){
      console.log('habitabnte segundo then', this.habitantes_list);
     }else{
       console.log('no existen habitabntes');
     }
      this.habitantes_list = habitante || {}
    })
   
  }

  
  ngOnInit(): void {
    this.consultarHabitantesOnce();
  }

  keys(objeto: Object){
    return Object.keys(objeto || {})
  }

  goToHabitante(habitante:any) {
    this.router.navigate([habitante], { relativeTo: this.route });
  }

  modalFormulario() {
    const dialogRef = this.dialog.open(FormularioComponent, { data: { titulo: "Registrar nuevo habitante", habitante: null },width: '50%'});

    dialogRef.afterClosed().subscribe(habitante => {
      console.log('datos ingresados al crear peticiones', habitante);
      if (habitante) {
        // registrar datos en firebase
        

        this.habitanteService.createHabitante(habitante)
          .then(() => {
            console.log("peticion registrada exitosamente");
            this.consultarHabitantesOnce();

          })
          .catch((error) => {
            console.log("error al registrar peticion ", error);

          })
      }
    });
  }
}
