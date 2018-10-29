import { Component, OnInit } from '@angular/core';
import { faTachometerAlt, faGlobe, faExclamationCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sym-side-dapp-list',
  templateUrl: './side-dapp-list.component.html',
  styleUrls: ['./side-dapp-list.component.scss']
})
export class SideDappListComponent implements OnInit {

  faPlus = faPlus;
  faTachometerAlt = faTachometerAlt;
  faGlobe = faGlobe;
  faExclamationCircle = faExclamationCircle;

  constructor() { }

  ngOnInit() {
  }

}
