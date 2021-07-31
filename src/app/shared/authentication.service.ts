import { User } from './../models.ts/User';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData:any;
  constructor(
   public afStore:AngularFirestore,
    public ngFireAuth:AngularFireAuth,
    public router:Router,
  ) {
    this.ngFireAuth.authState.subscribe(user =>{
      if(user){
        this.userData=user
        localStorage.setItem('user',JSON.stringify(this.userData))
        JSON.parse(localStorage.getItem('user'))
      }else{
        localStorage.setItem('user',null)
        JSON.parse(localStorage.getItem('user'))

      }
    })
   }


   signIn(email:string,password:string){
     return this.ngFireAuth.signInWithEmailAndPassword(email,password)
   }
   registerUser(email:string,password:string){
    return this.ngFireAuth.createUserWithEmailAndPassword(email,password)
  }

  get isLoggedIn() :boolean{
    const user=JSON.parse(localStorage.getItem('user'))
    return (user!== null)?true:false

  }
  setUserData(user:any){
    const userRef :AngularFirestoreDocument<any> = this.afStore.doc(`user/${user.id}`)
    const userData: User ={
      uid:user.uid,
      email:user.email,
      name:user.name,
      dispayName:user.dispayName,
      photoURL:user.photoURL,
    }
    return userRef.set(userData,{
      merge:true
    })
  }

  signOut(){
    return this.ngFireAuth.signOut().then(()=>{
      localStorage.removeItem('user')
      localStorage.removeItem('uid')
      this.router.navigate(['login'])
    })
  }

}
