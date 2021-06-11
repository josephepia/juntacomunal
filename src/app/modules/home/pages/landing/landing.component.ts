import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

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
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true; }

  ngOnInit(): void {
  }

}
