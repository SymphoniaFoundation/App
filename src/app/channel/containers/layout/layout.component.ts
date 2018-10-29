import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sym-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  channelname;
  sub;

  constructor(private route: ActivatedRoute) {
    // this.channelname = this.route.snapshot.paramMap.get('name');

    this.sub = this.route.params.subscribe(params => {
      this.channelname = params['name']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
  }

  ngOnInit() {
  }

}
