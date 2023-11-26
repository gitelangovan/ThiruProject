import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm!: FormGroup;
  loginFormArray!: FormArray;
  constructor(private router: Router,private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      loginFormArray: this.formBuilder.array([this.loginFormGroup()])
    });
  }

  private loginFormGroup() {
    return this.formBuilder.group({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    })
  }

  // Parent Array Controls:
  loginControls(): AbstractControl[] {
    return (<FormArray>this.loginForm.get('loginFormArray')).controls;
  }

  onSubmit(): void {
    this.router.navigate(['/homePage']);
  }
}
