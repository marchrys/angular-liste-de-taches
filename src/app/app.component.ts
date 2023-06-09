import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'liste-de-taches';

  menuItems: MenuItem[] = [
    {label: 'S\'inscrire', icon: 'person_add', link:''},
    {label: 'Se connecter', icon: 'login', link:''}
  ];
}

interface MenuItem {
  label: string;
  icon: string;
  link: string;
}
