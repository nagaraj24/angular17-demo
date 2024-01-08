import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule,MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  homeWidgetGallery:any=[
    {
      "id": 1,
      "title": "Greetings",
      "desc": "The simple Greeting Widget",
      "url": "greetings",
    },
    {
      "id": 2,
      "title": "Calendar",
      "desc": "The simple Greeting Widget",
      "url": "greetings",
    },
    {
      "id": 2,
      "title": "Minimal Greetings",
      "desc": "The simple Greeting Widget",
      "url": "greetings",
    },
  ];
  ngOnInit() {
    // this.homeWidgetGallery =[];
  }
  
}
