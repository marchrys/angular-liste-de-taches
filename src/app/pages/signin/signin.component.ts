import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
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

  public onSubmit() {
    this.email.match(this.validEmailRegex) ? this.errors.email = false : this.errors.email = true;
    this.pass.match(this.validPassRegex) ? this.errors.pass = false : this.errors.pass = true;

    this.hasErrors = !Object.values(this.errors).every((value: any) => value === false);
    if(!this.hasErrors) console.log('ok');
  }

  public togglePassVisibility() {
    this.passVisible = !this.passVisible;
  }
}
