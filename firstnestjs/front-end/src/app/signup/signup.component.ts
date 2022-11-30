import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private signupService: SignupService) {
    this.signUpForm = new FormGroup({
      username: new FormControl(""),
      dob: new FormControl(""),
      password: new FormControl(""),
      city: new FormControl("")
    }
    );
  }

  ngOnInit(): void {
  }

  public createUser(){
    const newUser = this.signUpForm.value;
    this.signupService.createUser(newUser).subscribe();
  }

}
