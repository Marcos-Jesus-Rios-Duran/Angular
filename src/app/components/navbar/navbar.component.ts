import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  // Asegúrate de importar CommonModule

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],  // Aquí importa CommonModule
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() userName: string = '';
  @Output() logout: EventEmitter<void> = new EventEmitter(); // Evento de logout
  isSidebarVisible = false; // Estado para controlar el submenú
  userImageUrl = 'assets/image.png'; // Ruta a la imagen del usuario

  ejercicios = Array.from({ length: 12 }, (_, index) => index + 1); // Crea un array de 1 a 12
  
  // Función para alternar el submenú
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
  onEjercicioClick(){
    this.isSidebarVisible = false;
  }

  // Evento para emitir el logout
  onLogout() {
    this.logout.emit();
  }
}
