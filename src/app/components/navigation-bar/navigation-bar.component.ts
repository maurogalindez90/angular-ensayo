import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private keycloakService: KeycloakService) {}

  ngOnInit(): void {
  }

  public logout = async () => {
    try {
      await this.keycloakService.logout('http://localhost:4200');
    } catch (e) {
      console.log(e)
    }
  }
}
