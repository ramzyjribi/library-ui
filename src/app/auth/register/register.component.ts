import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../shared/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  hidePwdContent: boolean = true;
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,private apiService: ApiService , private snackBar: MatSnackBar){
      this.registerForm = fb.group({
        firstName: fb.control('', [Validators.required]),
        lastName: fb.control('', [Validators.required]),
        email: fb.control('', [Validators.required]),
        mobileNumber: fb.control('', [Validators.required]),
        password: fb.control('', [Validators.required]),
        rpassword: fb.control('', [Validators.required]),
      });
    }
    register() {
      let user = {
        firstName: this.registerForm.get('firstName')?.value,
        lastName: this.registerForm.get('lastName')?.value,
        email: this.registerForm.get('email')?.value,
        mobileNumber: this.registerForm.get('mobileNumber')?.value,
        password: this.registerForm.get('password')?.value,
      };

      this.snackBar.open("thank you for registring", 'OK');

      this.apiService.register(user).subscribe({
        next: (res) => {
          console.log(res);
          this.snackBar.open(res, 'OK');
        },
      });
      
      

    
    }

  }



