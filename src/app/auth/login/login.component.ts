import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../shared/services/api.service';
import { AuthenticationResponse, User } from '../../models/models';
import { usersList } from '../../models/listUsers';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  users : User[] = usersList ;

  loginForm: FormGroup;
  hidePassword: boolean = true;

  constructor(
    fb: FormBuilder,
    private apiService: ApiService,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = fb.group({
      email: fb.control('', [Validators.required]),
      password: fb.control('', [Validators.required]),
    });
  }
  login() {
    var exist = false; 
    let loginInfo = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };

    this.users.forEach((element) =>{
      if (element.email == loginInfo.email && element.password == loginInfo.password) {
        this.apiService.userIdentity = element;
        console.log(element);
        console.log(this.apiService.userIdentity);
        this.apiService.userStatus.next("loggedIn");
        exist = true;
      }
    })

    if (!exist) {
      this.snackBar.open('Credential are invalid!', 'OK');
    }

    /*this.apiService.login(loginInfo).subscribe({
      next : (res : AuthenticationResponse) => {
        if (res == null){
          this.snackBar.open('Credential are invalid!', 'OK');
        }
        else {
          localStorage.setItem('access_token', res.jwt);
          this.apiService.userStatus.next("loggedIn");
          //console.log(res); 
        }    
          

      },
      error: err => {
        this.snackBar.open('Credential are invalid!  ' + err.error, 'OK');
      }

      })*/
      }

}


