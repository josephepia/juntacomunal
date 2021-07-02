import { Component, OnInit,Inject } from '@angular/core';
import { UserAuthService } from 'src/app/core/services/user-auth.service';
import {FormsModule} from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Variables
  
  cpasswordRegistrar:any;

  buttonDisabled:boolean = false
  constructor(
    private auth: UserAuthService
  ) {    }

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

    this.auth.loginEmail(this.formulario.value.correo,this.formulario.value.contrasena).then(()=>{
      this.buttonDisabled = true
    })
  }

  


}
