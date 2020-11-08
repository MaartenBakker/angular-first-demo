import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  private serverId: number = 10;
  private serverStatus: string = 'offline';

  getServerStatus(): string {
    return this.serverStatus;
  }

  getServerId(): number {
    return this.serverId;
  }
}
