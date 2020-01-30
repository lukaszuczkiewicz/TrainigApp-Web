import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { StorageService } from 'src/app/core/core/security/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private matSnackBar: MatSnackBar,
    private storageService: StorageService) { }

  protected themes: boolean[] = [true, false, false, false];

  protected selectedTheme: boolean = true;

  ngOnInit() {
  }

  changeTheme(): void {

  }
  onLogOutClick() {
    this.storageService.removeItem('jwtToken');
    this.router.navigate(['/']);
    this.matSnackBar.open(`You are now logged out`, "Ok", { duration: 3000 });
  }

  onSettingsClick() {
    this.router.navigate(['/admin']);
  }
}
