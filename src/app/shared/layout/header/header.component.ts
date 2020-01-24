import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private matSnackBar: MatSnackBar) { }

  protected themes: boolean[] = [true, false, false, false];

  protected selectedTheme: boolean = true;

  ngOnInit() {
  }

  changeTheme(): void {

  }
  onLogOutClick() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['/']);
    this.matSnackBar.open(`You are now logged out`, "Ok", { duration: 3000 });
  }
}
