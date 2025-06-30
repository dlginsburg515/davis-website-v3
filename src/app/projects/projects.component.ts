import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { PROJECTS } from '../data/project-data';
import { NgFor } from '@angular/common';


// type ItemKey = keyof Project;

@Component({
  selector: 'app-projects',
  imports: [RouterOutlet, ProjectCardComponent, NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})


export class ProjectsComponent {
   title = 'Projects';
   PROJECT_LIST = PROJECTS;



//   projserv = inject(ProjectbaseService);

//   proj: Project={
//     description:'',
//     id:'',
//     priority:0,
//     title:'',
//     video:'',
//     purpose:'',
//   }

//   input: string = '';

//   projs: Project[] = [];
//   filteredProjs: Project[] = [];

// sortColumn: string | null = null;
// sortDirection: 'asc' | 'desc' = 'asc';

// ngOnInit(){
//   this.projserv.getInventory().subscribe(data => {
//     this.projs = data;
//     this.filteredProjs = [...this.projs]; 
//   });
// }

// sendInput() {
//   this.filterProjects();
//   //this.output.emit(this.input);
// }

// filterProjects() {
//   const searchTerm = this.input.toLowerCase();
//   console.log('Search Term in filterItems:', searchTerm);
//   if (!searchTerm) {
//   this.filteredProjs = [...this.projs];
//   return;
//   }
//   this.filteredProjs = this.projs.filter(item => item.title.toLowerCase().includes(searchTerm) || item.purpose.toLowerCase().includes(searchTerm));
// }

// sort(column: ItemKey) {
//   if (this.sortColumn === column) {
//     this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
//   } else {
//     this.sortColumn = column;
//     this.sortDirection = 'asc';
//   }

//   this.filteredProjs.sort((a, b) => {
//     const valueA = a[column];
//     const valueB = b[column];

   
//     if (typeof valueA === 'string' && typeof valueB === 'string') {
//       return this.sortDirection === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
//     } else if (typeof valueA === 'number' && typeof valueB === 'number') {
//       return this.sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
//     } else {
      
//       return 0;
//     }
//   });
// }

}
