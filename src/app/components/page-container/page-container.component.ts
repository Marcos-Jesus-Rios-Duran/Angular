import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [CommonModule, ContentComponent, SidebarComponent],  // Asegurar CommonModule
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent {
  isSidebarVisible = true;
  
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
