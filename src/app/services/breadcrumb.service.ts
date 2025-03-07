import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbsSubject = new BehaviorSubject<any[]>([]);  // Aquí almacenamos las migas de pan.
  breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter(route => route.outlet === 'primary')
      )
      .subscribe(route => {
        this.updateBreadcrumbs(route.snapshot);
      });
  }

  // Método para actualizar las migas de pan
  private updateBreadcrumbs(routeSnapshot: any) {
    const breadcrumbs = this.createBreadcrumbs(routeSnapshot);
    this.breadcrumbsSubject.next(breadcrumbs);
  }

  // Crear las migas de pan en base a la ruta
  private createBreadcrumbs(routeSnapshot: any): any[] {
    const breadcrumbs: any[] = [];
    let currentRoute = routeSnapshot;
    while (currentRoute) {
      if (currentRoute.data && currentRoute.data['breadcrumb']) {
        breadcrumbs.unshift({
          label: currentRoute.data['breadcrumb'],
          url: currentRoute.url.map((segment: any) => segment.path).join('/')
        });
      }
      currentRoute = currentRoute.parent;
    }
    return breadcrumbs;
  }
}
