import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';

  // Constructor runs w/ever component/obj is initialized 
  constructor() { }


  // Lifecycle method you want to usually use when initializing code i.e HTTP request
  ngOnInit(): void {
  }

}
