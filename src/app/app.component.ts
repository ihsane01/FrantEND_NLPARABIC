import { Component } from '@angular/core';
import { DataService } from './service/data.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frant_MLproject';
  hello : string='';

  constructor(private DataService: DataService) {
  }
 
}

 
