import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-table',
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements AfterViewInit{
  @Input() columns: string[] = [];        
  @Input() columnHeaders: string[] = [];    
  @Input() set dataSource(value: any[]) {
    this._dataSource = new MatTableDataSource(value);
    if (this.paginator) {
      this._dataSource.paginator = this.paginator;
    }
  }

  _dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this._dataSource.paginator = this.paginator;
  }

}
