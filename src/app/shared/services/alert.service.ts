import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private matSnackBar: MatSnackBar) { }

  success(message: string) {
    this.matSnackBar.open(message, null, {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  error(message: string) {
    this.matSnackBar.open(message, null, {
      duration: 3000,
      panelClass: ['error-snackbar']
    });
  }

}
