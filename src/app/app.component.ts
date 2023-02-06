import { Component, OnInit } from '@angular/core';
import { MasterReqService } from './services/master/master-req.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private master: MasterReqService) {
    console.log('constrcutor');

    this.master.setUser().then((user) => {
      console.log(user);
    });
  }
  ngOnInit(): void {}
}
