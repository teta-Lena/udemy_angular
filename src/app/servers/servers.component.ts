import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Tests';
  username = '';
  serverCreated = false;
  servers = ['server1', 'server2'];
  click = 0;
  clicks = [];
  showHidden = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {}
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created';
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  clearInput() {
    this.username = '';
  }
  increment() {
    this.click += 1;
    console.log(this.click);
    this.clicks.push(this.click);
    return this.clicks;
  }
  // getUniqueStyle() {}
}
