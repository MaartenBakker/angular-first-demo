import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  private serverId = 10;
  private serverStatus: string;


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  getServerId(): number {
    return this.serverId;
  }

  getColor(): string {
    return this.getServerStatus() === 'online' ? 'green' : 'red';
  }

  toggle(): void {
    this.serverStatus = this.getServerStatus() === 'online' ? 'offline' : 'online';
  }
 }
