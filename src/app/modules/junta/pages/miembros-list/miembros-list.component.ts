import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import { FormularioMiembroComponent } from '../../components/formulario-miembro/formulario-miembro.component';
@Component({
  selector: 'app-miembros-list',
  templateUrl: './miembros-list.component.html',
  styleUrls: ['./miembros-list.component.scss']
})
export class MiembrosListComponent implements OnInit {

  identificacion:any
  nombrehabitante:any
  apellidohabitante:any
  nacimientohabitante:any
  generohabitante:any
  telefonohabitante:any
  direccionhabitante:any
  rol:any
  


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
  ) {}

  miembros:any = {}

  ngOnInit(): void {
    this.consultarMiembros()
  }
  

  keys(objeto: Object){
    return Object.keys(objeto || {})
  }

  consultarMiembros(){

    firebase.database().ref('MiembrosJAC').once("value",(datos)=>{
      if(datos.exists()){
        this.miembros = datos.val()
      }else{
        this.miembros = {}
      }
    })

  }


  modalFormulario(){
    //aca no se puede mandar nada al formulario ya que se va a crear uno nuevo
    const dialogRef = this.dialog.open(FormularioMiembroComponent, {data: {titulo: "Registrar", miembros: this.miembros}});

    dialogRef.afterClosed().subscribe(miembros => {
      console.log('datos ingresados al crear comuna',miembros);
      if(miembros){
         // registrar datos en firebase
        this.registrarMiembro(miembros)
        
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }

  registrarMiembro(datos:any){
      firebase.database()
    .ref('MiembrosJAC/').push(datos)
    .then(()=> {
      console.log("registrada correctamente")
    })
    .catch((error)=>console.log("ocurrio un error al registrar ->",error))
  }


}
