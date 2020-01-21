import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-report-issue',
  templateUrl: './report-issue.component.html',
  styleUrls: ['./report-issue.component.scss']
})
export class ReportIssueComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ReportIssueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSendClick(msg: string): void {
    //send to server
  }

  ngOnInit() {
  }

}
