import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;




  constructor(private formBuilder:FormBuilder,private router:Router) { }

  goToPage(pageName:string):void{

    this.router.navigate([`${pageName}`])
  }



  ngOnInit(){
    this.loginForm = this.formBuilder.group({


      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,]],

      acceptTerms: [false, Validators.requiredTrue]

  });
}

get f() { return this.loginForm.controls; }



}





