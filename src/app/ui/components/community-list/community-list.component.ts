import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'src/app/providers/electron.service';

@Component({
  selector: 'sym-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.scss']
})
export class CommunityListComponent implements OnInit {

  constructor(public electronService: ElectronService) { }

  ngOnInit() {
  }

}
