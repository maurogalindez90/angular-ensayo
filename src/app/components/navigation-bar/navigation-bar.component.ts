import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  public keycloakService: KeycloakService

  constructor() {
    this.keycloakService = new KeycloakService();
   }

  ngOnInit(): void {
  }

  public logout = async () => {
    try {
      console.log('logout was called');
      let pepe = await this.keycloakService.logout('http://localhost:4200');
      console.log(pepe);
    } catch (e) {
      console.log(e)
    }
  }
}
