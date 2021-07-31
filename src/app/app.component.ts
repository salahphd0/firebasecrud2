import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './shared/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public authServise: AuthenticationService,
    public router: Router,

  ) {
    this.initializeApp();
  }
  initializeApp(){
    if(this.authServise.isLoggedIn){
      this.router.navigate(['members'])

    }else{
      this.router.navigate(['login'])

    }
  }

}
