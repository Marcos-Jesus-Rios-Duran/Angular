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
      this.description = "En esta práctica, me familiaricé con el entorno de Angular y comprendí la estructura básica de un proyecto.";
      break;
    case 'page1':
      this.title = "Anatomy of a Component";
      this.description = "Aprendí que un componente en Angular tiene tres partes principales: una clase en TypeScript, una plantilla HTML y estilos CSS. Implementé cambios en la plantilla y los estilos para personalizar su apariencia y funcionalidad.";
      break;
    case 'page2':
      this.title = "Updating the Component";
      this.description = "Modifiqué la clase del componente en TypeScript para actualizar su lógica y comportamiento. Descubrí cómo gestionar el estado del componente y mejorar su funcionalidad.";
      break;
    case 'page3':
      this.title = "Component Composition";
      this.description = "Aprendí a dividir la aplicación en múltiples componentes reutilizables. Implementé componentes anidados para estructurar mejor la aplicación y mejorar su organización.";
      break;
    case 'page4':
      this.title = "Control Flow - @if";
      this.description = "Exploré la directiva @if en Angular para controlar la visibilidad de elementos según condiciones lógicas. Implementé @if para mostrar y ocultar contenido dinámicamente.";
      break;
    case 'page5':
      this.title = "Control Flow - @for";
      this.description = "Utilicé la directiva @for para iterar sobre listas y renderizar elementos dinámicamente. Implementé listas interactivas en la interfaz de usuario.";
      break;
    case 'page6':
      this.title = "Property Binding";
      this.description = "Aprendí a enlazar propiedades de un componente a su plantilla HTML mediante property binding. Implementé vínculos dinámicos para actualizar automáticamente los valores en la vista.";
      break;
    case 'page7':
      this.title = "Event Handling";
      this.description = "Descubrí cómo manejar eventos en Angular usando event binding. Implementé eventos como clics y teclas presionadas para interactuar con el usuario.";
      break;
    case 'page8':
      this.title = "Communicating with @Input";
      this.description = "Aprendí a pasar datos de un componente padre a un componente hijo usando el decorador @Input. Implementé la comunicación de datos entre componentes.";
      break;
    case 'page9':
      this.title = "Communicating with @Output";
      this.description = "Utilicé @Output y EventEmitter para enviar datos de un componente hijo a su componente padre. Implementé esta comunicación para gestionar interacciones entre componentes.";
      break;
    case 'page10':
      this.title = "Deferable Views";
      this.description = "Exploré cómo Angular maneja la carga diferida de vistas para optimizar el rendimiento de la aplicación. Implementé estrategias para mejorar la eficiencia en la renderización.";
      break;
    default:
      this.title = "Default Title";
      this.description = "Selecciona un ejercicio para ver la descripción.";
      break;
  }
}
}
