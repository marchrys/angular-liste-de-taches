import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
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
