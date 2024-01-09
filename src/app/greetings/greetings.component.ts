import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-greetings',
  standalone: true,
  imports: [MatButtonModule,MatCardModule],
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.scss'
})
export class GreetingsComponent implements OnInit {
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
    this.updateTime();
    
  }
  

 updateTime(){
  const now = new Date();
  this.time = now;
  // this.intervalId = setInterval(() => {
  //   this.time = new Date();
  // }, 1000);
  
 }
  

 
 
 
 
  


  

  
    
   
     
   
    
   

}
