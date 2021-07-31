import { Router } from '@angular/router';
import { AuthenticationService } from './../shared/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(
    public authServise: AuthenticationService,
    public router: Router,
  ) { }

  ngOnInit() {
  }
  signUp(email,password){
    this.authServise.registerUser(email.value,password.value)
    .then((res)=>{
     // console.log(res.user.uid)
      //console.log(res.user.email)
      localStorage.setItem('uid',res.user.uid)
      this.router.navigate(['/members']);
     // console.log(localStorage.getItem('uid'))
      }).catch((error)=>{
       window.alert(error.message)
      }
      )}

}
