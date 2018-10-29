import { Component, OnInit } from '@angular/core';
import { faPlus, faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sym-side-channel-list',
  templateUrl: './side-channel-list.component.html',
  styleUrls: ['./side-channel-list.component.scss']
})
export class SideChannelListComponent implements OnInit {

  faPlus = faPlus;
  faComments = faComments;

  constructor() { }

  ngOnInit() {
  }

}
