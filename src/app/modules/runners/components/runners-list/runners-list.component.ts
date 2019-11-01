import { Component, OnInit } from "@angular/core";
import { RunnersService } from "../../services/runners.service";
import { IRunner } from "../../models/IRunner";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-runners-list",
  templateUrl: "./runners-list.component.html",
  styleUrls: ["./runners-list.component.scss"]
})
export class RunnersListComponent implements OnInit {
  protected runnesList: IRunner[];
  protected dataSource: MatTableDataSource<IRunner> = new MatTableDataSource();
  protected displayedColumns: string[] = [
    "No.",
    "First Name",
    "Last Name",
    "Calendar",
    "Edit"
  ];

  constructor(private runnersService: RunnersService) {}

  ngOnInit() {
    this.runnersService.getRunners().subscribe(
      res => {
        this.runnesList = res;
        this.dataSource.data = this.runnesList;
        console.log(this.dataSource);
      },
      err => {
        console.warn(err);
      }
    );
  }

  protected applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  protected onEdit(id: string): void {
    console.log(id);
  }
}