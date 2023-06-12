import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public email: string = '';
  public pass: string = '';
  public passVisible: boolean = false;
  public errors: any = {
    email: false,
    pass: false
  };
  public hasErrors: boolean = true;
  private validEmailRegex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  private validPassRegex: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
  public userLoggedIn: boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
     this.checkUserLoggedIn();
  }

  public onSubmit() {
    this.email.match(this.validEmailRegex) ? this.errors.email = false : this.errors.email = true;
    this.pass.match(this.validPassRegex) ? this.errors.pass = false : this.errors.pass = true;

    this.hasErrors = !Object.values(this.errors).every((value: any) => value === false);
    if(!this.hasErrors) this.signUp(this.email, this.pass);
  }

  public togglePassVisibility() {
    this.passVisible = !this.passVisible;
  }

  signUp(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Utilisateur inscrit avec succès
        const user = userCredential.user;

        // Afficher le Snackbar de succès
        this.snackBar.open('Inscription réussie', 'Fermer', {
          duration: 3000, // Durée d'affichage du Snackbar en millisecondes
        });

         // Effectuez la redirection vers la page souhaitée
        this.router.navigate(['']);
      })
      .catch((error) => {
        // Gérez les erreurs survenues lors de l'inscription
        console.log(error)
        this.snackBar.open(error, 'Fermer', {
          duration: 0, // Durée d'affichage du Snackbar en millisecondes
        });
      });
  }

  checkUserLoggedIn() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        // L'utilisateur est connecté
        console.log('Utilisateur connecté :', user);
        this.userLoggedIn = true;
      } else {
        // L'utilisateur n'est pas connecté
        console.log('Utilisateur non connecté');
        this.userLoggedIn = false;
      }
    });
  }
}
