import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, Event, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbs = new BehaviorSubject<Array<{ label: string, url: string }>>([]);
  breadcrumbs$ = this.breadcrumbs.asObservable();

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd),
      distinctUntilChanged()
    ).subscribe(() => {
      const root: ActivatedRouteSnapshot = this.router.routerState.snapshot.root;
      const breadcrumbs: Array<{ label: string, url: string }> = [];
      this.addBreadcrumb(root, [], breadcrumbs);
      this.breadcrumbs.next(breadcrumbs);
    });
  }

  private addBreadcrumb(route: ActivatedRouteSnapshot, parentUrl: string[], breadcrumbs: Array<{ label: string, url: string }>) {
    // Verificar si 'routeConfig' y 'data' existen antes de acceder a ellos
    if (route.routeConfig?.data?.breadcrumb) {
      const url = [...parentUrl, route.url.map(segment => segment.path).join('/')].join('/');
      breadcrumbs.push({
        label: route.routeConfig.data.breadcrumb,
        url: `/${url}`
      });
    }

    // Procesar el hijo de la ruta actual si existe
    if (route.firstChild) {
      this.addBreadcrumb(route.firstChild, parentUrl.concat(route.url.map(segment => segment.path)), breadcrumbs);
    }
  }
}
