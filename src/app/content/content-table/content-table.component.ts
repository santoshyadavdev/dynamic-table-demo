import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.scss']
})
export class ContentTableComponent implements OnInit, OnChanges {
  @Input() columns: any;

  displayedColumns: string[];
  _data: MatTableDataSource<any>;

  @Input() data: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.previousValue === undefined) {
      this._data = new MatTableDataSource(this.data);
      this.displayedColumns = this.columns.map(c => c.name);
    }
  }
  constructor() { }

  ngOnInit(): void {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this._data.filter = filterValue.trim().toLowerCase();
  }

}
