import { Routes } from '@angular/router';
import { Ejercicio01Component } from './pages/ejercicio-01/ejercicio-01.component';
import { Ejercicio02Component } from './pages/ejercicio-02/ejercicio-02.component'; 
import { Ejercicio03Component } from './pages/ejercicio-03/ejercicio-03.component'; 
import { Ejercicio04Component } from './pages/ejercicio-04/ejercicio-04.component'; 
import { Ejercicio05Component } from './pages/ejercicio-05/ejercicio-05.component'; 
import { Ejercicio06Component } from './pages/ejercicio-06/ejercicio-06.component'; 

export const routes: Routes = [
  { path: 'page1', component: Ejercicio01Component, data: { breadcrumb: 'Ejercicio 01' } },
  { path: 'page2', component: Ejercicio02Component, data: { breadcrumb: 'Ejercicio 02' } },
  { path: 'page3', component: Ejercicio03Component, data: { breadcrumb: 'Ejercicio 03' } },
  { path: 'page4', component: Ejercicio04Component, data: { breadcrumb: 'Ejercicio 04' } },
  { path: 'page5', component: Ejercicio05Component, data: { breadcrumb: 'Ejercicio 05' } },
  { path: 'page6', component: Ejercicio06Component, data: { breadcrumb: 'Ejercicio 06' } },
  { path: '**', redirectTo: 'page1' }
];
