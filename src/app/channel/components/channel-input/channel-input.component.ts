import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sym-channel-input',
  templateUrl: './channel-input.component.html',
  styleUrls: ['./channel-input.component.scss']
})
export class ChannelInputComponent implements OnInit {

  public chat: string;
  @Output() submitMessage: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  Send() {
    if (this.chat === '') {
      return;
    }

    this.submitMessage.emit(this.chat);
    this.chat = '';
  }

}
