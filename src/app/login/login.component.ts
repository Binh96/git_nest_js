import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private loginService: LoginService) { 
    this.formLogin = new FormGroup({
      nameAccount: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {
    
  }

  public login(): void{
    this.loginService.login(this.formLogin.value).subscribe();
  }

}
