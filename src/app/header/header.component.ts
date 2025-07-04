import { Component, inject, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink} from '@angular/router';


declare var bootstrap: any;


@Component({
  selector: 'app-header',
  imports: [RouterLink,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private router = inject(Router);

  @ViewChild('navbarCollapse', { static: false }) navbarCollapse!: ElementRef;

  closeNavbar() {
    const bsCollapse = bootstrap.Collapse.getInstance(this.navbarCollapse.nativeElement);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  }

}
