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
  user: any = {}
  email : any;
  password:any;
  emailRegistrar : any;
  passwordRegistrar:any;
  cpasswordRegistrar:any;
  constructor(
    private userAuthService: UserAuthService
  ) {    }

  ngOnInit(): void {

  }

  registrar():void {
    if (this.passwordRegistrar == this.cpasswordRegistrar){
      this.userAuthService.signUpEmail(this.emailRegistrar, this.passwordRegistrar);
      console.log("Registrado con exito");
    }else{
      console.log("Password diferentes")
    }

  }

  login():void{
    this.userAuthService.loginEmail(this.email, this.password);
    console.log("logueado con exito");
    
  }

  

}
