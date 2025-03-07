import { Component } from '@angular/core';
import { BreadcrumbService } from '../../../services/breadcrumb.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
  imports:[RouterModule]
})
export class BreadcrumbComponent {
  breadcrumbs$;

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;  // Obtenemos las migas de pan del servicio
  }
}
