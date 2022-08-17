import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Dating App';
  users: any;
  /**
   *
   */
  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.getUsers();
  }
  
  //lazy loading -> until sb has taken place a subscription
  getUsers(){
    this.http.get('https://localhost:5000/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error)
    })
  }
}
