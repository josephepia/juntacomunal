import { MatFabMenu } from '@angular-material-extensions/fab-menu';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { FormularioComponent as FormularioPermisoComponent} from '../../../permisos/components/formulario/formulario.component';
import { ModalConfirmacionComponent } from 'src/app/shared/components/modal-confirmacion/modal-confirmacion.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from 'src/app/core/services/user-auth.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss']
})
export class RolComponent implements OnInit {

  rol:any = {}
  displayedColumns = ['id','write','read'];
  permisos:any[] = []
  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private authService: UserAuthService
  ) { }

  fabButtons: MatFabMenu[] = [
    {
      id: 1,
      icon: 'create',
      tooltip: "editar",
      tooltipPosition: 'left'
    },
    {
      id: 2,
      icon: 'location_city',
      tooltip:"Agregar permiso",
      tooltipPosition: 'left'
    },
    {
      id: 3,
      icon: 'delete',
      tooltip:"eliminar",
      tooltipPosition: 'left'
    },
  ];

  opcionSeleccionada(item: any){
    console.log("seleccione la opcion -> ",  item);

    switch (item) {
      case 1:
        this.modalFormulario()
        break;
        case 2:
        this.modalFormulariopermiso()
          break;
        case 3:
        this.modalEliminar()
          break;
    
      default:
        break;
    }
    
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('idRol');
    this.consultarRolOnce(id);
  }

  async consultarRolOnce(id: any){
    this.rol = await this.authService.getRolOnce(id)
    if(Object.keys(this.rol).length>0)
   
   for(let permiso of this.keys(this.rol.permisos)){
      this.permisos.push(Object.assign({id: permiso}, this.rol.permisos[permiso]))
      
    }
    console.log('rol ', this.rol);
    console.log('permisos ', this.permisos);
    
    
    
  }

  keys(object: Object){
    return Object.keys(object || {})
  }




  modalFormulario(){
    const dialogRef = this.dialog.open(FormularioComponent,{data:  {titulo: "modificar", rol: this.rol}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result',result);
      if(result){
         this.modificar(result)
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }

  modalFormulariopermiso(){
    const dialogRef = this.dialog.open(FormularioPermisoComponent,{data:  {titulo: "Registrar", permiso: {idrol:this.rol.id, nombrerol:this.rol.nombre}}, panelClass: ['row','margin-0','col-sm-8','col-md-4','col-lg-4']});

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result',result);
      if(result){

        console.log('datos del permiso a registrar -> ',result);
        
         this.agrearPermiso(result)
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }

  modificar(datos: Object){
  
  }


  
  modalEliminar(){
    const dialogRef = this.dialog.open(ModalConfirmacionComponent,{data: {titulo:"Seguro desea eliminar?",detalle:"esta accion es irreversible"}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result',result);
      if(result){
         this.eliminar()
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }

  //registrar permisos a esta rol
  agrearPermiso(permiso: any){
    permiso['idrol'] = this.rol['id']
    permiso['nombrerol'] = this.rol['nombre']
    
  }

  //eliminar
  eliminar(){
    
  }

}
