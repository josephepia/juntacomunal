import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
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
      iconFa:null
    },
    {
      title: 'PQRS',
      url: '/pqrs',
      iconMaterial: 'question_answer',
      iconFa:null
    },
    {
      title: 'Correspondencia',
      url: '/correspondencias',
      iconMaterial: null,
      iconFa:'fas fa-folder-open'
    },
    {
      title: 'Convenios',
      url: '/convenios',
      iconMaterial: null,
      iconFa:'fas fa-file-signature'
    },
    {
      title: 'Publicaciones',
      url: '/publicaciones',
      iconMaterial: null,
      iconFa:'fas fa-file-invoice'
    },
    {
      title: 'Comunas',
      url: '/comunas',
      iconMaterial: null,
      iconFa:'fas fa-city'
    },
    {
      title: 'Barrios',
      url: '/barrios',
      iconMaterial: null,
      iconFa:'fas fa-city'
    },
    {
      title: 'Habitantes',
      url: '/habitantes',
      iconMaterial: null,
      iconFa:'fas fa-users'
    },
    {
      title: 'Junta administrativa',
      url: '/junta',
      iconMaterial: null,
      iconFa:'fas fa-user-shield'
    },
    
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,library: FaIconLibrary) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    library.addIcons(faCoffee)
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change',this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
