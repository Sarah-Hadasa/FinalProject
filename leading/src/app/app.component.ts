import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
 // noUser = true;
  noUser = false;
  title = 'leading';
  constructor(private service: UserService) {
    this.service.loginUser.subscribe((x) => {
      this.noUser = false;
    });
  }
  ngOnInit(): void {
    if (sessionStorage['Name'] && sessionStorage['Name'] != null) {
      this.noUser = false;
    }
  }
}
