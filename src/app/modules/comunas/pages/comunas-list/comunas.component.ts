import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import firebase from "firebase/app"
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { Comuna } from './../../../../core/Modelos/comuna';
import { ComunaService } from './../../../../core/services/comuna.service';

@Component({
  selector: 'app-comunas',
  templateUrl: './comunas.component.html',
  styleUrls: ['./comunas.component.scss']
})
export class ComunasComponent implements OnInit {
   
  

  comuna:any = {}
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
 

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private comunaService: ComunaService
    ) { }

  

  comunas:any
  barrios:any


  async consultarBarrios(comuna: any){

   await firebase.database().ref('barrios').orderByChild('comuna').equalTo(comuna).once("value",(datos)=>{
        if(datos.exists()){
          this.barrios = datos.val()
          console.log("barrios de "+comuna);
          console.log(this.barrios);

        }else{
          this.barrios = {}
          
        }
    })

    return Object.keys(this.barrios)
  }

  consultarComunas(){
    firebase.database().ref('comunas').on('value',(datos)=>{
      if(datos.exists()){
        this.comunas = datos.val()
        for(let comuna of this.keys(datos.val())){
           
        }
        console.log("datos val -> ", datos.val());

        console.log("comunas -> ", this.comunas);
        
      }else{
        this.comunas = {}
        console.log('no hay datos');
        
      }
    })
  }

  ngOnInit(): void {
    this.consultarComunas();
  }

  keys(objeto: Object){
    return Object.keys(objeto || {})
  }


  
  modalFormulario(){
    const dialogRef = this.dialog.open(FormularioComponent, {data: {titulo: "Registrar", comuna: null}});

    dialogRef.afterClosed().subscribe(comuna => {
      console.log('datos ingresados al crear comuna',comuna);
      if(comuna){
         // registrar datos en firebase

         this.comunaService.createComuna(comuna)
         .then(()=>{
            console.log("comuna registrada exitosamente");
            
         })
         .catch((error)=>{
          console.log("error al registrar comuna ", error);

         })
      
       // this.registrarComuna(comuna)
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }

  
  registrarComuna(datos: Object){
    firebase.database()
    .ref('comunas/').push(datos)
    .then(()=> {
      console.log("registrada correctamente")
    })
    .catch((error)=>console.log("ocurrio un error al registrar ->",error))
  }

  goToComuna(comuna:any) {
    this.router.navigate([comuna], { relativeTo: this.route });
  }

}
