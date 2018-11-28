import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { SwarmService } from 'src/app/services/swarm.service';

@Component({
  selector: 'sym-side-profile',
  templateUrl: './side-profile.component.html',
  styleUrls: ['./side-profile.component.scss']
})
export class SideProfileComponent implements OnInit {

  faCog = faCog;
  public account: string;

  constructor(private swarmService: SwarmService) {
  }

  async ngOnInit() {
    this.account = await this.swarmService.getAccount();
  }

}
