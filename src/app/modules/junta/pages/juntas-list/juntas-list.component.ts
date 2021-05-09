import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-juntas-list',
  templateUrl: './juntas-list.component.html',
  styleUrls: ['./juntas-list.component.scss']
})
export class JuntasListComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }


  goToCargos() {
    this.router.navigate(['cargos'], { relativeTo: this.route });
  }
  goToMiembros() {
    this.router.navigate(['miembros'], { relativeTo: this.route });
  }
}
