import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { CreateUser, User } from '../model/user';

const urlLogin = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { 

  }

  public login(user: User): Observable<any>{
    return this.http.post<User>(urlLogin+"login", user);
    // const result = this.http.post<User>(urlLogin+"login", user);
    // if(result){
    //   return of(true);
    // }
    // else{
    //   return of(false);
    // }
  }
  
}
