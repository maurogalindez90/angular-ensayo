import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-bands-table',
  templateUrl: './bands-table.component.html',
  styleUrls: ['./bands-table.component.scss']
})
export class BandsTableComponent implements OnInit {
  public bandsTableDataSource = new MatTableDataSource<Band[]>();
  public bandsTableColumns = ['id', 'name', 'leaderName', 'leaderNickname'];
  public bandsArray: Array<any> = [];
  public pepe: any;
  constructor (private httpService: HttpService) { }

  ngOnInit(): void {
    this.getBands();
  }

  public getBands = () => {
    this.httpService.getBands().subscribe(response => {
      this.pepe = response;
      console.log(typeof this.pepe);
    this.bandsTableDataSource = new MatTableDataSource(this.pepe);
    })
  }

}

interface Band {
  id: number;
  name: string;
  leader: Leader | null
}

interface Leader {
  name: string;
  nickname: string;
}
