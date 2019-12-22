import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public afAuth: AngularFireAuth, public alertController: AlertController) { 

   }

   login(email,password) {
    this.afAuth.auth.signInWithEmailAndPassword(email,password).catch(error => {
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  resetPassword() {
    window.open('https://firefly-5af90.firebaseapp.com/__/auth/action');
  }

  
}
