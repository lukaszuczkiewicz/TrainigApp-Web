import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: "app-admin-panel",
  templateUrl: "./admin-panel.component.html",
  styleUrls: ["./admin-panel.component.scss"]
})
export class AdminPanelComponent implements OnInit {
  protected themeFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.themeFormGroup = this.fb.group({
      primaryColor: ["", Validators.required],
      accentColor: ["", Validators.required]
    });
  }

  selectedFile: File = null;
  

  onSubmit(): void {
    const fd = new FormData;
    fd.append('image', this.selectedFile, this.selectedFile.name);
    console.log(fd);
    this.http.post("https://localhost:44362/api/upload", fd).subscribe(
      (res) => {
        console.log(res)
      }, 
      (err) => console.log(err));
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }
}
