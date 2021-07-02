import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/core/services/user-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  buttonDisabled:boolean = false
  constructor(
    private auth: UserAuthService
  ) { }

  ngOnInit(): void {
  }

  //estructura para usar formulario reactivo
  formulario = new FormGroup({
    correo: new FormControl(null, [Validators.required, Validators.email]),
    contrasena: new FormControl(null, [Validators.required, Validators.minLength(6)]),

  });

  //al cancelar el modal
  cancelar() {
   
  }

  //al confirmar el registro
  registrar(): void {

    this.auth.signUpEmail(this.formulario.value.correo,this.formulario.value.contrasena).then(()=>{
      this.buttonDisabled = true
    })
  }

}
