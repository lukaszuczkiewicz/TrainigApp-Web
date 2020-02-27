import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/core/security/storage.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private alertService: AlertService,
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
    this.alertService.success(`You are now logged out`);
  }

  onSettingsClick() {
    this.router.navigate(['/admin']);
  }
}
