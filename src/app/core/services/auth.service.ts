import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { User, AuthOptions } from './auth.types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.authState$ = this.afAuth.authState;
  }

  get isAutenticado(): Observable<boolean> {
    return this.authState$.pipe(map( user => user !== null));
  }

  autenticar({ isSignIn, user }: AuthOptions): Promise<auth.UserCredential> {
    let operation: Promise<auth.UserCredential>;

    operation = isSignIn ? this.entrarComEmail(user) : this.cadastrarComEmail(user);

    return operation;
  }

  logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  private entrarComEmail({ email, senha }: User): Promise<auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, senha);
  }

  private cadastrarComEmail({ email, senha, nome }: User): Promise<auth.UserCredential> {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, senha)
      .then(credentials =>
        credentials.user
          .updateProfile({ displayName: name, photoURL: null })
          .then(() => credentials)
      );
  }
}
