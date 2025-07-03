import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NgStyle],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'davisginsburgdotcom';

  headerHeight = 0;
  
  ngAfterViewInit() {
    this.updateHeaderHeight();
    window.addEventListener('resize', this.updateHeaderHeight.bind(this));
  }
  
  updateHeaderHeight() {
    const nav = document.querySelector('nav.fixed-top');
    if (nav) {
      this.headerHeight = nav.clientHeight;
    }
  }
}
