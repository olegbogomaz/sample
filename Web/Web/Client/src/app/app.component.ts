import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data;

  constructor(private http: Http) {

  }

  //https://oleg-sample-web.azurewebsites.net/api/values
  ngOnInit() {
    this.http.get('http://localhost:62932/api/values').subscribe(
      response => {
        this.data = response.json();
      }
    );
  }
}
