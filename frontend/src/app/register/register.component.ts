import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm : FormGroup;
  constructor() { 
    this.registerForm = new FormGroup(
      {
        first : new FormControl ('', [Validators.required]),
        last : new FormControl ('', [Validators.required]),
        email : new FormControl ('', [Validators.required, Validators.email]),
        password : new FormControl ('', [Validators.required, Validators.minLength(8)]),
        confirmPassword : new FormControl ('', [Validators.required, Validators.minLength(8)]),

      }
    )
  }
  
  ngOnInit(): void {
  }
  onRegister() {
    console.log();
  }

}
