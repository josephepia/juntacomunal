import { Component, OnInit } from '@angular/core';
import { MatFabMenu } from '@angular-material-extensions/fab-menu';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import { ModalConfirmacionComponent } from 'src/app/shared/components/modal-confirmacion/modal-confirmacion.component';
import { HabitanteService } from './../../../../core/services/habitante.service';

@Component({
  selector: 'app-habitante',
  templateUrl: './habitante.component.html',
  styleUrls: ['./habitante.component.scss']
})
export class HabitanteComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private habitanteService: HabitanteService
  ) { }

  habitante:any = {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.consultarHabitanteOnce(id);
  }

  fabButtons: MatFabMenu[] = [
    {
      id: 1,
      icon: 'create',
      tooltip: "Modificar",
      tooltipPosition: 'left'
    },
    {
      id: 2,
      icon: 'delete',
      tooltip:"Eliminar",
      tooltipPosition: 'left'
    },
  ];

  consultarHabitanteOnce(id: any){
    this.habitanteService.ConsultarHabitanteIndividual(id).then((datos)=>{
      this.habitante = datos;
      this.habitante['id']= id;
    })
  }

  eliminar(id: any){
    const dialogRef = this.dialog.open(ModalConfirmacionComponent,{data: {titulo:"Seguro desea eliminar?",detalle:"esta accion es irreversible"}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result',result);
      if(result){
        this.habitanteService.eliminarHabitante(id)
        this.router.navigate(['/habitantes']);
      }
    });
  }

  opcionSeleccionada(item: any){
    console.log("seleccione la opcion -> ",  item);

    switch (item) {
      case 1:
        //this.modalFormulario()
      break;
      
      case 2:
        let id = this.route.snapshot.paramMap.get('id');
        this.eliminar(id)
      break;
    
      default:
      break;
    }
  }

}
