import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { LoginService } from '../service/login.service';
import { Location } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  statusLogin: boolean = false;

  constructor(private loginService: LoginService,
              private router: Router) { 
    this.formLogin = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {
    
  }

  public login(): void{
    this.loginService.login(this.formLogin.value).subscribe({
      next: (res) => {
        this.router.navigateByUrl("");
      },
      error: (err) => {
        this.router.navigateByUrl("/error");
      }
    });
  }

}
