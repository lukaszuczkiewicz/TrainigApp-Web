import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  protected themes: boolean[] = [true, false, false, false];

  protected selectedTheme: boolean = true;

  ngOnInit() {
  }

  changeTheme(): void {

  }
}
