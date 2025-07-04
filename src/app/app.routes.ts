import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const routes: Routes = [

    {
        path: '',
        component: HomePageComponent,
        title: 'Home',
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Projects',
      },
      { path: 'contact', 
        component: ContactFormComponent,
        title: "Contact Davis" 
      }
    
];
