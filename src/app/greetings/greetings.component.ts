import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";

@Component({
  selector: 'app-greetings',
  standalone: true,
  imports: [MatButtonModule,MatCardModule],
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.scss'
})
export class GreetingsComponent {
  currentDate:string="";
  greetingText:string="";
  hourText:string="";
  minutesText:string="";
  secondsText:string="";
  time:any;
  intervalId:any;
  
  ngOnInit(){
    var today = new Date();
    this.greetingText = today.toDateString();
    this.dateInt();
  }
  

 dateInt(){
  // this.intervalId = setInterval(() => {
  //   this.time = new Date();
  // }, 1000);
 }
  

 
 
 
 
  


  

  
    
   
     
   
    
   

}
