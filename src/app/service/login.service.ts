import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { CreateUser, User } from '../model/user';

const urlLogin = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { 

  }

  public login(user: User): Observable<User>{
    return this.http.post<User>(urlLogin, user);
  }
  
}
