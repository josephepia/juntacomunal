import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import firebase from "firebase/app"
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { PublicacionesService } from 'src/app/core/services/publicaciones.service';


@Component({
  selector: 'app-publicaciones-list',
  templateUrl: './publicaciones-list.component.html',
  styleUrls: ['./publicaciones-list.component.scss']
})
export class PublicacionesListComponent implements OnInit {

  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/900`);
  
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true; 

  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;
  
  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  } 

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
  comuna:any = {}
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  publicaciones!:any[]

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
    this.getPublicacionesOnce();
  }
  keys(objeto: Object){
    return Object.keys(objeto || {})
  }

  ultimasPublicaciones!:any[]
  getPublicacionesOnce(){
    this.publicacionesService.getPUBLICACIONESOnce()
    .then((datos)=>{
      this.publicaciones = []
      if(datos?.exists()){
        console.log('existen datos');

        datos.forEach(dataSnap => {
          let publi = dataSnap.val()
          publi['id'] = dataSnap.key
          this.publicaciones.push(publi)
        });


        
      }
      console.log('datos de publicaciones ', this.publicaciones);

      this.ultimasPublicaciones = this.publicaciones
      .filter((publicacion,i) => {
        if(i<5){
          return publicacion
        }
       
      });
      console.log('iltimas publi',this.ultimasPublicaciones);
      
    })
    .catch((error)=>{
      console.log('error al consultar publicaciones ', error);
      
    })
  }

  goToPublicaciones(publicaciones:any) {
    this.router.navigate([publicaciones], { relativeTo: this.route });
  }
  goToPublicacion(publicaciones:any) {
    this.router.navigate([publicaciones], { relativeTo: this.route });
  }
  

}
