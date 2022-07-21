import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../classes/user";
import {UserHttpService} from "../../services/user-http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserHttpService) { }

  ngOnInit(): void { }

  myForm: FormGroup = new FormGroup({
    "userEmail": new FormControl("",[Validators.email,Validators.required]),
    "userPassword": new FormControl("",Validators.required),
  });

  newUser: User = new User("","");

  login(){
    let email = this.myForm.controls['userEmail'].value;
    let password = this.myForm.controls['userPassword'].value;
    this.newUser.email = email;
    this.newUser.password = password;
    console.log("New user: ",this.newUser)

    this.userService.loginUser(email,password);
  }

}
