import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


import { MatDialog } from '@angular/material/dialog';
import firebase from "firebase/app"
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { PublicacionesService } from 'src/app/core/services/publicaciones.service';
import { FormularioComponent } from 'src/app/modules/publicaciones/components/formulario/formulario.component';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers: [NgbCarouselConfig]
})
export class LandingComponent implements OnInit {
  max = 10;
  readonly = false;
  resettable = false;
  selected = 0;
  hovered = 0;
  centered = false;
  currentRate = 5.00;
  disabled = false;
  unbounded = false;
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055].map((n) => `https://picsum.photos/id/${n}/1600/500`);
  images2 = [1055].map((n) => `https://picsum.photos/id/${n}/1600/500`);
  imagess = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/900`);

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
  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private publicacionesService: PublicacionesService,config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true; }

    modalFormulario() {
      const dialogRef = this.dialog.open(FormularioComponent, { data: { titulo: "Registrar", publicaciones: null } });
  
      dialogRef.afterClosed().subscribe(publicaciones => {
        console.log('datos ingresados al crear publicaciones', publicaciones);
        if (publicaciones) {
          // registrar datos en firebase
  
          this.publicacionesService.createPUBLICACIONES(publicaciones)
            .then(() => {
              console.log("comuna registrada exitosamente");
              this.consultarPUBLICACIONESOnce();
  
            })
            .catch((error) => {
              console.log("error al registrar comuna ", error);
  
            })
  
          // this.registrarComuna(comuna)
        }
        //luego de recibir los datos los mandamos a firebase
  
      });
    }
    publicaciones_list:any

  consultarPUBLICACIONESOnce(){
    location.reload();
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

    this.router.navigate(['/publicaciones/',publicaciones]);
  }
  goToPublicacion(publicaciones:any) {
    this.router.navigate(['/publicaciones/',publicaciones]);
  }
}
