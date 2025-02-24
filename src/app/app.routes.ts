import { Routes } from '@angular/router';
import { Ejercicio01Component } from './pages/ejercicio-01/ejercicio-01.component';
import { Ejercicio02Component } from './pages/ejercicio-02/ejercicio-02.component'; 
import { Ejercicio03Component } from './pages/ejercicio-03/ejercicio-03.component'; 
import { Ejercicio04Component } from './pages/ejercicio-04/ejercicio-04.component'; 
import { Ejercicio05Component } from './pages/ejercicio-05/ejercicio-05.component'; 
import { Ejercicio06Component } from './pages/ejercicio-06/ejercicio-06.component'; 

export const routes: Routes = [
  { path: 'page1', component: Ejercicio01Component },
  { path: 'page2', component: Ejercicio02Component },
  { path: 'page3', component: Ejercicio03Component },
  { path: 'page4', component: Ejercicio04Component },
  { path: 'page5', component: Ejercicio05Component },
  { path: 'page6', component: Ejercicio06Component },
  { path: '**', redirectTo: 'page1' }
];
