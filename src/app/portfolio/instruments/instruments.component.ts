import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { InstrumentInterfase } from '../../interfaces/instrument.interfase';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.scss'],
})
export class InstrumentsComponent implements OnInit {


  @Input() portfolio: Array<InstrumentInterfase>;

  gridColumnApi: any;
  gridApi: any;

  settings: any;


  columnDefs = [
    { headerName: 'name', field: 'name', sortable: true, filter: true, resizable: false },
    { headerName: 'balance', field: 'balance', sortable: true, filter: true, resizable: true },
    { headerName: 'lots', field: 'lots', sortable: true, filter: true, resizable: true },
    { headerName: 'blocked', field: 'blocked', sortable: true, filter: true, resizable: true },
    { headerName: 'ticker', field: 'ticker', sortable: true, filter: true, resizable: true },
    { headerName: 'average', field: 'average', sortable: true, filter: true, resizable: true },
    { headerName: 'Income', field: 'income_total', sortable: true, filter: true, resizable: true },
    { headerName: 'Inc %', field: 'income_percent_total', sortable: true, filter: true, resizable: true },
    { headerName: 'Inc day', field: 'income_day', sortable: true, filter: true, resizable: true },
    { headerName: 'Inc day %', field: 'income-day_percent', sortable: true, filter: true, resizable: true },
  ];


  constructor(
    public localStorageService: LocalstorageService,
  ) {

  }

  ngOnInit() {
    this.settings = this.localStorageService.get('gridPortfoloSettings');

  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    if (this.settings) {
      this.gridColumnApi.setColumnState(this.settings);
    }
  }


  saveSettings() {
    this.settings = this.gridColumnApi.getColumnState();
    this.localStorageService.set('gridPortfoloSettings', this.settings);
  }

  columnMoved() {
    setTimeout(() => {
      this.saveSettings();
    }, 1000);
  }

  rowClick($event: any) {
    console.log($event);
  }
}

