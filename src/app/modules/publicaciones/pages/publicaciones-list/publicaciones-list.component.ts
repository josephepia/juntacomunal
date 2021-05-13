import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import firebase from "firebase/app"
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

import { PublicacionesService } from 'src/app/core/services/publicaciones.service';
@Component({
  selector: 'app-publicaciones-list',
  templateUrl: './publicaciones-list.component.html',
  styleUrls: ['./publicaciones-list.component.scss']
})
export class PublicacionesListComponent implements OnInit {
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
    private publicacionesService: PublicacionesService
  ) { }
  publicaciones_list:any
  consultarPUBLICACIONESOnce(){
    this.publicacionesService.getPUBLICACIONESOnce().then((publicaciones)=>{
     if(publicaciones){
      console.log('publicaciones segundo then', this.publicaciones_list);
      
      
     }else{
       console.log('no existen publicaciones');
       
     }
      this.publicaciones_list = publicaciones || {}
    })
   
  }
  ngOnInit(): void {
    this.consultarPUBLICACIONESOnce();
  }
  keys(objeto: Object){
    return Object.keys(objeto || {})
  }

  goToPublicaciones(publicaciones:any) {
    this.router.navigate([publicaciones], { relativeTo: this.route });
  }
  
}
