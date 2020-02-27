import { Component, OnInit, ViewChild } from "@angular/core";
import { RunnersService } from "../../services/runners.service";
import { IRunner } from "../../models/IRunner";
import { MatTableDataSource, MatDialog, MatPaginator, MatSort } from "@angular/material";
import { EditRunnerComponent } from '../edit-runner/edit-runner.component';
import { AlertService } from 'src/app/shared/services/alert.service';

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
    private dialog: MatDialog,
    private alertService: AlertService) {}

  ngOnInit() {
    this.runnersService.getRunners().subscribe(
      res => {
        this.runnersList = res;
        this.dataSource.data = this.runnersList;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      err => {
        this.alertService.error(err);
      }
    );
    this.runnersService.updateTableSubject.subscribe(
      res => {
        this.dataSource.data = res;
      },
      err => {
        this.alertService.error(err);
      }
    );
  }

  protected applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  protected onDelete(runner: IRunner) {
    this.runnersService.deleteRunner(runner.id).subscribe(
      res => {
        this.ngOnInit();
        this.alertService.success('Runner deleted successfully');
      },
      err => {
        this.alertService.error(err);
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