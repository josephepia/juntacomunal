import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import firebase from "firebase/app"
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { PQRSService } from './../../../../core/services/pqrs.service';


@Component({
  selector: 'app-pqrs-list',
  templateUrl: './pqrs-list.component.html',
  styleUrls: ['./pqrs-list.component.scss']
})
export class PqrsListComponent implements OnInit {

  
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
    private pqrsService: PQRSService
  ){}
  
  pqrs_list:any

  consultarPQRSOnce(){
    this.pqrsService.getPQRSOnce().then((pqrs)=>{
     if(pqrs){
      console.log('comunas segundo then', this.pqrs_list);
      
      
     }else{
       console.log('no existen comunas');
       
     }
      this.pqrs_list = pqrs || {}
    })
   
  }

  
  ngOnInit(): void {
    this.consultarPQRSOnce();
  }

  keys(objeto: Object){
    return Object.keys(objeto || {})
  }

  goToPqrs(pqrs:any) {
    this.router.navigate([pqrs], { relativeTo: this.route });
  }

}
