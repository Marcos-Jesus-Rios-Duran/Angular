import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

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
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateContent(); // Actualiza el contenido cuando cambie la ruta
      });
  }

  // Actualiza el contenido en base a la ruta activa
  updateContent() {
    const route = this.activatedRoute.snapshot.firstChild?.routeConfig?.path;

    switch (route) {
      case 'page1':
        this.title = "Título de la práctica 1";
        this.description = "Descripción de la práctica 1: Este es el ejercicio 1.";
        break;
      case 'page2':
        this.title = "Título de la práctica 2";
        this.description = "Descripción de la práctica 2: Este es el ejercicio 2.";
        break;
      case 'page3':
        this.title = "Título de la práctica 3";
        this.description = "Descripción de la práctica 3: Este es el ejercicio 3.";
        break;
      case 'page4':
        this.title = "Título de la práctica 4";
        this.description = "Descripción de la práctica 4: Este es el ejercicio 4.";
        break;
      case 'page5':
        this.title = "Título de la práctica 5";
        this.description = "Descripción de la práctica 5: Este es el ejercicio 5.";
        break;
      case 'page6':
        this.title = "Título de la práctica 6";
        this.description = "Descripción de la práctica 6: Este es el ejercicio 6.";
        break;
      case 'page7':
        this.title = "Título de la práctica 7";
        this.description = "Descripción de la práctica 7: Este es el ejercicio 7.";
        break;
      case 'page8':
        this.title = "Título de la práctica 8";
        this.description = "Descripción de la práctica 8: Este es el ejercicio 8.";
        break;
      case 'page9':
        this.title = "Título de la práctica 9";
        this.description = "Descripción de la práctica 9: Este es el ejercicio 9.";
        break;
      case 'page10':
        this.title = "Título especial para Page 10";
        this.description = "Contenido adicional para la página 10: Puedes añadir aquí un título, texto o lo que necesites.";
        break;
      default:
        this.title = "Título predeterminado";
        this.description = "Selecciona un ejercicio para ver la descripción.";
        break;
    }
  }
}
