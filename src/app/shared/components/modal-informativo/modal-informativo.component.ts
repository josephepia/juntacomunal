import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-informativo',
  templateUrl: './modal-informativo.component.html',
  styleUrls: ['./modal-informativo.component.scss']
})
export class ModalInformativoComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ModalInformativoComponent>, @Inject(MAT_DIALOG_DATA) public datosEntrada: any) { }

  ngOnInit(): void {
    
  }

  //al confirmar el registro
  aceptar(): void {
  
    this.dialogRef.close();
  }
}
