import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) { }

  handleButtonClick(value: string) {
    // Redirect to another route and pass the value as a query parameter
    this.router.navigate(['/question'], { queryParams: { value } });
  }
}
