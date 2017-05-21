import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navigation-bar',
  template: `
    <md-toolbar color="primary">
      <span>Shabbat Clusters</span>
      <span class="example-fill-remaining-space"></span>
      <button md-fab><i class="material-icons">account_circle</i></button>
    </md-toolbar>
    <div> {{ (user | async)?.uid }} </div>
    <img [src]="(user | async)?.photoURL">
    <br/>
    <button (click)="login()" md-button>Login</button>
    <button (click)="logout()" md-button>Logout</button>
  `,
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
