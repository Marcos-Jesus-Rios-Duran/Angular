import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-05',
  templateUrl: './ejercicio-05.component.html',
  styleUrls: ['./ejercicio-05.component.css']
})
export class Ejercicio05Component {
  operatingSystems = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'lin', name: 'Linux' },
  ];

  users = [
    { id: 0, name: 'Ailton' },
    { id: 1, name: 'IECO' },
    { id: 2, name: 'Juve' },
    { id: 3, name: 'TONY' },
    { id: 4, name: 'Marcos' },
  ];
}
