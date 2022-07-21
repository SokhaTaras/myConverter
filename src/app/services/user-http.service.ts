import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../classes/user";


@Injectable()
export class UserHttpService {

  constructor(private http: HttpClient) {}

  loginUser(email:string, password:string){
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', password);
  }

  logoutUser(){
    localStorage.removeItem("Email");
    localStorage.removeItem("Password");
  }

  getUser(): any{
    return localStorage.getItem("Email");
  }

  isLoggedIn(): boolean{
    return this.getUser() !== null;
  }


  postUser(userInstance:User){
    const body = {userEmail: userInstance.email,
                  userPassword: userInstance.password};
    return this.http.post('assets/userHttp.json',body)
  }

}
