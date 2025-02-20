import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToolbarComponent {}
