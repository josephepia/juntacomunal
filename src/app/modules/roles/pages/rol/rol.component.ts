import { MatFabMenu } from '@angular-material-extensions/fab-menu';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { FormularioComponent as FormularioPermisoComponent} from '../../../permisos/components/formulario/formulario.component';
import { ModalConfirmacionComponent } from 'src/app/shared/components/modal-confirmacion/modal-confirmacion.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from 'src/app/core/services/user-auth.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss']
})
export class RolComponent implements OnInit {

  rol:any = {}
  displayedColumns = ['index','id','nombre','write','read'];
  misPermisos:any[] = []
  dataSource:MatTableDataSource<any> = new MatTableDataSource();
  permisos:any[] = []
  selectionWrite = new SelectionModel<any>(true, []);
  selectionRead = new SelectionModel<any>(true, []);

  rolObserver!: Subscription
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
    this.consultarRolOn(id);
  }
  ngOnDestroy(){
    this.rolObserver.unsubscribe()
    
    
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelectedWrite() {
    const numSelected = this.selectionWrite.selected.length;
    const numRows = this.dataSource.data.length;
  
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleWrite() {
    if (this.isAllSelectedWrite()) {
      this.selectionWrite.clear();
      return;
    }

    this.selectionWrite.select(...this.dataSource.data);
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelectedRead() {
    const numSelected = this.selectionRead.selected.length;
    const numRows = this.dataSource.data.length;
  
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(type: string) {
    let permisosKeys:  any[] = []
    for(let permiso of this.permisos){
      permisosKeys.push(permiso.id)
    }
    console.log('key permisos ', permisosKeys);
    
    if (this.isAllSelectedRead() && type == 'read') {
      
      this.authService.updateAllPermisosIntoRol(this.rol.id,permisosKeys,type,false)
      this.selectionRead.clear()

      return;
    }
    if(this.isAllSelectedWrite() && type == 'write'){
      this.authService.updateAllPermisosIntoRol(this.rol.id,permisosKeys,type,false)
      this.selectionWrite.clear()
      return;
    }

    this.authService.updateAllPermisosIntoRol(this.rol.id,permisosKeys,type,true)

    type == 'read' ?  this.selectionRead.select(...this.dataSource.data) : this.selectionWrite.select(...this.dataSource.data);


  }

  togglePermiso(element: any, type: string){
    //this.selectionRead.toggle(element)
    this.authService.updatePermisosIntoRol(this.rol.id,element.id,type == 'read' ? {read:!element.read}:{write:!element.write})
  }

 
  async consultarRolOn(id: any){
    this.rolObserver = (await this.authService.getRolOn(id)).subscribe((rol)=>{
        
      this.rol = rol

      this.consultarPermisosOnce()
    
    })
    
   
    
    
  }

  async consultarPermisosOnce(){
    this.permisos = await this.authService.getPermisosOnce()
    
    this.misPermisos = []
    let permisosActuales = Object.keys(this.rol.permisos || {})
    
    
    for(let permiso of this.permisos){
      
      
      if(permisosActuales.includes(permiso.id)){
        
        
        this.misPermisos.push({
          id:permiso.id,
          nombre: permiso.nombre,
          write: this.rol.permisos[permiso.id]?.write,
          read: this.rol.permisos[permiso.id]?.read
        })
      }else{
        this.misPermisos.push({
          id:permiso.id,
          nombre: permiso.nombre,
          write: false,
          read: false
        })
      }
    }

    
    this.dataSource = new MatTableDataSource(this.misPermisos);
    this.selectionWrite.clear();
    this.selectionRead.clear();
    this.selectionWrite.select(...this.dataSource.data.filter((item) =>item.write));
    this.selectionRead.select(...this.dataSource.data.filter((item) =>item.read));

    
    
    
  }

  keys(object: Object){
    return Object.keys(object || {})
  }




  modalFormulario(){
    const dialogRef = this.dialog.open(FormularioComponent,{data:  {titulo: "modificar", rol: this.rol}});

    dialogRef.afterClosed().subscribe(result => {
      
      if(result){
         this.modificar(result)
      }
      //luego de recibir los datos los mandamos a firebase
    
    });
  }

  modalFormulariopermiso(){
    const dialogRef = this.dialog.open(FormularioPermisoComponent,{data:  {titulo: "Registrar", permiso: {idrol:this.rol.id, nombrerol:this.rol.nombre}}, panelClass: ['row','margin-0','col-sm-8','col-md-4','col-lg-4']});

    dialogRef.afterClosed().subscribe(result => {
      
      if(result){

        
        
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
