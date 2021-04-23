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
  log_Email:any;
  log_Contraseña:any;
  reg_Email:any;
  reg_Contraseña:any;
  reg_Confirmacion_Contraseña:any;
  constructor(

  ) { 
   }

  ngOnInit(): void {
  }
  registrar():void {

  }
  login():void{

  }


}
