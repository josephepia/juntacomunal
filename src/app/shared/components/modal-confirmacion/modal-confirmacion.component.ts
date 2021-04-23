import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirmacion',
  templateUrl: './modal-confirmacion.component.html',
  styleUrls: ['./modal-confirmacion.component.scss']
})
export class ModalConfirmacionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalConfirmacionComponent>, @Inject(MAT_DIALOG_DATA) public datosEntrada: any) { }

  ngOnInit(): void {
    
  }

  //al cancelar el modal
  cancelar(){
    this.dialogRef.close(false)
  }

  //al confirmar el registro
  guardar(): void {
  
    this.dialogRef.close(true);
  }

}
