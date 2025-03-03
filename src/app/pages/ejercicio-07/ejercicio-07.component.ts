import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-07',
  standalone: true,
  templateUrl: './ejercicio-07.component.html',
  styleUrls: ['./ejercicio-07.component.css']
})
export class Ejercicio07Component {
  message = '';

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }

  onMouseLeave() {
    this.message = '';
  }
}
