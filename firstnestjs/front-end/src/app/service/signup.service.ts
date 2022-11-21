import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUser } from '../model/user';
const urlLogin = 'http://localhost:3000/'
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  public createUser(useraccount: CreateUser): Observable<any>{
    return this.http.post<CreateUser>(urlLogin +'sign-up', useraccount);
  }

}
