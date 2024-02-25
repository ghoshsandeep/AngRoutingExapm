import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routingExam';

 constructor(private route:Router){}

  NavigateToNotes(){
     this.route.navigate(['/notes']);
  }

  NavigateToNote(id:number){
    this.route.navigate(['/notes',id]);
  }
}
