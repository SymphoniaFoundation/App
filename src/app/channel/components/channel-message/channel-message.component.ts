import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sym-channel-message',
  templateUrl: './channel-message.component.html',
  styleUrls: ['./channel-message.component.scss']
})
export class ChannelMessageComponent implements OnInit {

  message = 'Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.';

  constructor() { }

  ngOnInit() {
  }

}
