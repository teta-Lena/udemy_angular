import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-tutorials',
  templateUrl: './binding-tutorials.component.html',
  styleUrls: ['./binding-tutorials.component.css'],
})
export class btComponent {
  serverElements = [
    { type: 'server', name: 'test server', content: 'just a test' },
  ];
  // newServerName = '';
  // newServerContent = '';

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
}
