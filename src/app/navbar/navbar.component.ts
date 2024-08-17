import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuActive: boolean = false;

  constructor(private route: ActivatedRoute, private navigationService: NavigationService, private elementRef: ElementRef, private renderer: Renderer2) {}

  goToPage(page: string) {
    this.navigationService.navigateToRoute(page);
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;

    if (this.menuActive) {
      document.body.classList.add('menu-active');
    } else {
      document.body.classList.remove('menu-active');
    }
  }

  closeMenu() {
    this.menuActive = false;
    this.renderer.setStyle(document.body, 'overflow', 'auto');
  }

}
