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
      name: new FormControl("", [Validators.required]),
      dob: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required])
    }
    );
  }

  ngOnInit(): void {
  }

  public createUser(){
    console.log("why");
    const newUser = this.signUpForm.value;
    this.signupService.createUser(newUser).subscribe();
  }

}
