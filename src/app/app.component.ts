import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NgStyle } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NgStyle],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'davisginsburgdotcom';
  headerHeight = 0;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.updateHeaderHeight();
    window.addEventListener('resize', this.updateHeaderHeight.bind(this));
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo({ top: 0 });
    });
  }
  
  updateHeaderHeight() {
    const nav = document.querySelector('nav.fixed-top');
    if (nav) {
      this.headerHeight = nav.clientHeight;
    }
  }
}
