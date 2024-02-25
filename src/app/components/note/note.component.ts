import { Component, OnInit } from '@angular/core';
import  { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent implements OnInit {
  noteid!:string|null;

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      this.noteid=param.get('id')
    });
  }



}
