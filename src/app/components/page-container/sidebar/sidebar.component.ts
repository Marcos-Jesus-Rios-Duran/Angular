import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentRoute: string = ''; // Ruta actual
  description: string = '';  // Descripción para la ruta actual
  title: string = ''; // Título para la ruta actual

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Suscríbete a los eventos de navegación para capturar la ruta activa
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        map(route => route.snapshot)
      )
      .subscribe(snapshot => {
        this.updateContent(snapshot.routeConfig?.path); // Actualiza el contenido cuando cambie la ruta
      });
  }

  // Actualiza el contenido en base a la ruta activa
  updateContent(route: string | undefined) {
    switch (route) {
      case 'page0':
        this.title = "Welcome to the Angular tutorial";
        this.description = "Descripción de la práctica 0: Este es el ejercicio 0.";
        break;
      case 'page1':
        this.title = "Anatomy of a Component";
        this.description = "Descripción de la práctica 1: Este es el ejercicio 1.";
        break;
      case 'page2':
        this.title = "Updating the component ";
        this.description = "Descripción de la práctica 2: Este es el ejercicio 2.";
        break;
      case 'page3':
        this.title = "Component composition";
        this.description = "Descripción de la práctica 3: Este es el ejercicio 3.";
        break;
      case 'page4':
        this.title = "Control flow -@if ";
        this.description = "Descripción de la práctica 4: Este es el ejercicio 4.";
        break;
      case 'page5':
        this.title = "Control flow -@for";
        this.description = "Descripción de la práctica 5: Este es el ejercicio 5.";
        break;
      case 'page6':
        this.title = "Property Binding";
        this.description = "Descripción de la práctica 6: Este es el ejercicio 6.";
        break;
      case 'page7':
        this.title = "Event handing ";
        this.description = "Descripción de la práctica 7: Este es el ejercicio 7.";
        break;
      case 'page8':
        this.title = "Comunicatingh with @Input ";
        this.description = "Descripción de la práctica 8: Este es el ejercicio 8.";
        break;
      case 'page9':
        this.title = "Comunicatingh with @Input";
        this.description = "Descripción de la práctica 9: Este es el ejercicio 9.";
        break;
      case 'page10':
        this.title = "Deferables views  ";
        this.description = "Contenido adicional para la página 10: Puedes añadir aquí un título, texto o lo que necesites.";
        break;
      default:
        this.title = "Título predeterminado";
        this.description = "Selecciona un ejercicio para ver la descripción.";
        break;
    }
  }
}
