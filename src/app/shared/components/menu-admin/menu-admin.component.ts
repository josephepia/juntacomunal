import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class MenuAdminComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  public adminPages = [
    {
      title: 'Inicio',
      url: '/home/dashboard',
      icon: 'home'
    },
    {
      title: 'Landing',
      url: '/home/landing',
      icon: 'home'
    },
    {
      title: 'PQRS',
      url: '/usuarios',
      icon: 'people-circle'
    },
    {
      title: 'Correspondencia',
      url: '/categorias',
      icon: 'clipboard'
    },
    {
      title: 'Convenios',
      url: '/histotialservicios',
      icon: 'clipboard'
    },
    {
      title: 'Publicaciones',
      url: '/configuracion',
      icon: 'settings'
    },
    {
      title: 'Comunas',
      url: '/comunas',
      icon: 'settings'
    },
    {
      title: 'Habitantes',
      url: '/habitantes',
      icon: 'settings'
    },
    {
      title: 'Junta adinistrativa',
      url: '/junta',
      icon: 'settings'
    },
    
  ];

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
