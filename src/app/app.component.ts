import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'davisginsburgdotcom';
  
  ngAfterViewInit() {
    const header = document.querySelector('app-header');
    if (header) {
      const height = header.clientHeight;
      document.querySelector('.main-content')?.setAttribute('style', `padding-top: ${height}px`);
    }
  }
}
