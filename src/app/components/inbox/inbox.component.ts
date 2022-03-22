import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NotifierService } from 'angular-notifier';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  public authorizationsTableDatasource = new MatTableDataSource<any>();
  public authorizationsTableColumns = ['id', 'authorizationDate', 'affiliateId', 'affiliateName', 'group', 'disability', 'judicialized', 'os', 'state', 'actions'];
  public authorizationsServiceMockResponse = [{id: 1, authorizationDate: new Date(), affiliateId: 1, group: {id: 1, description: 'oncologia'}, disability: true, judicialized: true, os: 'Medicus', state: {id: 1, description: 'Sin procesar'}},
  {id: 2, authorizationDate: new Date(), affiliateId: 2, group: {id: 2, description: 'diabetes'}, disability: true, judicialized: false, os: 'Medicus', state: {id: 1, description: 'Sin procesar'}},
  {id: 4, authorizationDate: new Date(), affiliateId: 4, group: {id: 1, description: 'oncologia'}, disability: false, judicialized: true, os: 'Osde', state: {id: 2, description: 'Pendiente asociado'}},
  {id: 3, authorizationDate: new Date(), affiliateId: 3, group: {id: 1, description: 'oncologia'}, disability: true, judicialized: false, os: 'Medicus', state: {id: 1, description: 'Sin procesar'}}];
  public inboxFiltersForm!: FormGroup;
  public states = <any>[];
  public limit = 2;
  public offset = 0;

  constructor (private httpService: HttpService, private notifierService: NotifierService) { }

  ngOnInit(): void {
    try {
      this.inboxFiltersForm = this.initializeInboxFiltersForm();
      this.getStates();
      this.getAuthorizations();
    } catch (e) {
      this.notifierService.notify('error', 'Hubo un error al obtener las autorizaciones');
    }
  }

  public getAuthorizations = (event?: any) => {
    console.log(event);
    this.httpService.getAuthorizations().subscribe(response => {
      //let authorizations: any = response;
      this.authorizationsTableDatasource = new MatTableDataSource(this.authorizationsServiceMockResponse);
    });
    if (this.paginator.pageSize) this.limit = this.paginator.pageSize;
    this.offset = this.paginator.pageIndex;
    this.authorizationsTableDatasource = new MatTableDataSource(this.authorizationsServiceMockResponse);
    this.authorizationsTableDatasource.paginator = this.paginator;
  }

  public initializeInboxFiltersForm = () => {
    return new FormGroup({
      state: new FormControl('')
    });
  }

  public getStates = () => {
    this.states = [{id: 1, description: 'Sin procesar'}, {id: 2, description: 'Pendiente asociado'}];
  }
}