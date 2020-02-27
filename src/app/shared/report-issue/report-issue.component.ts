import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-report-issue',
  templateUrl: './report-issue.component.html',
  styleUrls: ['./report-issue.component.scss']
})
export class ReportIssueComponent implements OnInit {

  private readonly URL = environment.URL;
  private readonly reportIssueEndpoint = environment.reportIssue;
  constructor(
    public dialogRef: MatDialogRef<ReportIssueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private alertService: AlertService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSendClick(msg: string): void {
    const url: string = this.URL + this.reportIssueEndpoint;
    this.http.post(url, msg).subscribe(
      res => {
        this.alertService.success('Your message was sent');
        this.onNoClick();
      },
      err => {
        this.alertService.success(`Couldn't send the message`);
      }
    );
  }

  ngOnInit() {
  }

}
