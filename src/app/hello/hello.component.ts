import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {

}
