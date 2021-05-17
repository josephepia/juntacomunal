import { UserAuthService } from 'src/app/core/services/user-auth.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class MenuAdminComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  public adminPages = [
    {
      title: 'Dashboard',
      url: '/home/dashboard',
      iconMaterial: 'dashboard',
      iconFa: null
    },
    {
      title: 'Inicio',
      url: '/home/landing',
      iconMaterial: 'home',
      iconFa: null
    },
   

    {
      title: 'Comunas',
      url: '/comunas',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'Barrios',
      url: '/barrios',
      iconMaterial: null,
      iconFa: 'fas fa-city'
    },
    {
      title: 'Habitantes',
      url: '/habitantes',
      iconMaterial: null,
      iconFa: 'fas fa-users'
    },
    {
      title: 'PQRS',
      url: '/pqrs',
      iconMaterial: 'question_answer',
      iconFa: null
    },
    {
      title: 'Correspondencia',
      url: '/correspondencias',
      iconMaterial: null,
      iconFa: 'fas fa-folder-open'
    },
    {
      title: 'Junta administrativa',
      url: '/junta',
      iconMaterial: null,
      iconFa: 'fas fa-user-shield'
    }, 
    {
      title: 'Convenios',
      url: '/convenios',
      iconMaterial: null,
      iconFa: 'fas fa-file-signature'
    },
    {
      title: 'Lineas de Atención',
      url: '/lineasAtencion',
      iconMaterial: null,
      iconFa: 'fas fa-file-signature'
    },
    {
      title: 'Publicaciones',
      url: '/publicaciones',
      iconMaterial: null,
      iconFa: 'fas fa-file-invoice'
    },

  ];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
     media: MediaMatcher, 
     library: FaIconLibrary,
     private userAuthService: UserAuthService
    ) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    library.addIcons(faCoffee)
  }
  CerrarSesion():void{
    this.userAuthService.logOutSession();
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
