import { ListService } from './services/list.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private listService:ListService){

  }

  ngOnInit() { }
  
}
