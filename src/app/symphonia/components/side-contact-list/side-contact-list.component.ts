import { Component, OnInit } from '@angular/core';
import { faPlus, faAddressBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sym-side-contact-list',
  templateUrl: './side-contact-list.component.html',
  styleUrls: ['./side-contact-list.component.scss']
})
export class SideContactListComponent implements OnInit {

  faPlus = faPlus;
  faAddressBook = faAddressBook;

  constructor() { }

  ngOnInit() {
  }

}
