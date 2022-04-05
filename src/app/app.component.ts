import { Component } from '@angular/core';

  // Component declaration
@Component({
  // Selector is w/e HTML tag used to embed component
  selector: 'app-root',
  // TemplateUrl is the HTML file being used
  templateUrl: './app.component.html',
  // StyleUrls is where the styles are held 
  styleUrls: ['./app.component.css']
})

  // Classes are where properties and methods of components are held
export class AppComponent {}
