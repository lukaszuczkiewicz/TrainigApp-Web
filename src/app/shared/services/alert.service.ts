import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private matSnackBar: MatSnackBar) { }

  openDialogSuccess(message: string) {
    this.matSnackBar.open(message, null, {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  openDialogWarning(message: string) {
    this.matSnackBar.open(message, null, {
      duration: 3000,
      panelClass: ['warning-snackbar']
    });
  }

}
