import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
constructor(private route:ActivatedRoute){}

ngOnInit(): void {
  this.route.queryParams.subscribe(params=>{
    const pid=params["projectid"];
    console.log(pid);
  });
}


}
