import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  public email: string = '';
  public errors: any = {
    email: false
  };
  private validEmailRegex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  public onSubmit() {
    this.email.match(this.validEmailRegex) ? this.errors.email = false : this.errors.email = true;

    console.log(Object.values(this.errors).every((value: any) => value === false));
  }
}
