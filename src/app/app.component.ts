import { Component } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { StorageService } from './core/core/security/storage.service'; // https://github.com/aitboudad/ngx-loading-bar
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private primaryColor;
  private accentColor;

  calendarPlugins = [dayGridPlugin]; // important!

  private themeWrapper = document.querySelector("body");

  constructor(public loader: LoadingBarService, 
    private storage: StorageService) { }

  title = 'Trainig-App-Web';

  ngOnInit() {
    this.primaryColor = this.storage.getItem("primaryColor");
    this.accentColor = this.storage.getItem("accentColor");

    this.themeWrapper.style.setProperty("--primary-color-50", this.primaryColor);
    this.themeWrapper.style.setProperty("-accent-color-50", this.accentColor);
  }
  
}
