import { Injectable } from '@angular/core';
import {Apollo, gql } from 'apollo-angular';
import {Observable} from "rxjs";
import { Router } from '@angular/router';
const MyQuery = gql`
query MyQuery($argument: String!, $qts: String!){
  question(argument: $argument,qts:$qts){
    score,question
  }}
`;
@Injectable({
  providedIn: 'root'})
export class DataService {
  public data:any ;
  constructor(private apollo: Apollo,private router: Router ) { }
  public qry(inputVariable: string, qts: string) {
    // -------- get Users (works) -------
    this.apollo.query({
      query: MyQuery,
      variables: {
        argument: inputVariable
        ,qts: qts
      }
    }).subscribe(
        result => {
          this.data = result.data;
        console.log(this.data.question.score);
        console.log(this.data.question.question);

        this.router.navigate(['/question'], { queryParams: { score: this.data.question.score , question: this.data.question.question} });
        },
        error => {
          console.log(error);
        }
      )
  
  
}}
