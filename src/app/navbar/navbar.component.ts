import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private route: ActivatedRoute, private navigationService: NavigationService) {}

  goToPage(page: string) {
    this.navigationService.navigateToRoute(page);
  }

}
