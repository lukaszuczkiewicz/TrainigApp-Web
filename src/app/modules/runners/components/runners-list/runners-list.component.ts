import { Component, OnInit, ViewChild } from "@angular/core";
import { RunnersService } from "../../services/runners.service";
import { IRunner } from "../../models/IRunner";
import { MatTableDataSource, MatDialog, Sort, MatPaginator, MatSort } from "@angular/material";
import { EditRunnerComponent } from '../edit-runner/edit-runner.component';

@Component({
  selector: "app-runners-list",
  templateUrl: "./runners-list.component.html",
  styleUrls: ["./runners-list.component.scss"]
})
export class RunnersListComponent implements OnInit {
  protected runnersList: IRunner[];
  protected sortedRunners: IRunner[];
  protected dataSource: MatTableDataSource<IRunner> = new MatTableDataSource();
  protected displayedColumns: string[] = [
    "No.",
    "First Name",
    "Last Name",
    "Email",
    "Calendar",
    "Edit",
    "Delete"
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private runnersService: RunnersService,
    private dialog: MatDialog) {}

  ngOnInit() {
    this.runnersService.getRunners().subscribe(
      res => {
        this.runnersList = res;
        this.dataSource.data = this.runnersList;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      err => {
        console.warn(err);
      }
    );
  }

  protected applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  protected onDelete(element) {
    this.runnersService.deleteRunner(element.id).subscribe(
      res => {
        console.log('runner deleted');
        this.ngOnInit();
      },
      err => {
        console.warn(err);
      }
    );
  }

  protected onEdit(runner: IRunner): void {
    this.dialog.open(EditRunnerComponent, {
      data: {
        runner
      }
    });
  }
}