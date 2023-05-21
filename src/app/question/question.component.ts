import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent {
  title = 'Frant_MLproject';
  response : string='';
  buttonValue: string='';
  score: number=3;
  maVariable: boolean = false;
question : string = '';
  constructor(private DataService: DataService ,private route: ActivatedRoute) {
  }
  fetchData() {
    if(this.score){
      this.DataService.qry(this.response,this.question);
    }
    else
    this.DataService.qry(this.response,this.buttonValue);
  }
  
ngOnInit() {
  
  this.route.queryParams.subscribe(params => {
     this.buttonValue = params['value'];
     this.score = params['score'];
      this.question = params['question'];
     if(this.score){
      this.maVariable = true;
     }
    console.log(this.buttonValue); // or assign it to a property for displaying in the template
  });
}
}
