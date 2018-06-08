import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MyTableDataSource } from './my-table-datasource';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MyTableDataSource;
  Data:Array<any>=[];
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  constructor(private UserserviceService: UserserviceService){
    this.Data = this.UserserviceService.userData;
    console.log('sss',this.Data);
  }
  

  ngOnInit() {
    this.dataSource = new MyTableDataSource(this.paginator, this.sort);
  }
}
