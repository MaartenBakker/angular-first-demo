import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  userName: string = '';

  constructor() {}

  ngOnInit(): void {}

  onResetUserName(): void {
    this.userName = '';
  }

  userNameIsEmpty(): boolean {
    return this.userName.length > 0 ? false : true;
  }
}
