import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  event: any;
  
  constructor(
    private router: Routes,
  ) { 
    const appRoutes: Routes = [
      { path: 'crisis-center', component: SignUpComponent },
    ]
  }

  ngOnInit() {
  }

  public signIn(event, item) {
    // alert('Open ' + item);
  }

  // validation failed
  public failedSignIn(){

  }

  //redirect to home page/landing page:
  
}
