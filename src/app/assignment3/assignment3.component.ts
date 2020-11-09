import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  paragraphVisible = false;
  // count = 0;
  // clicks: Array<number> = [];
  // time;
  timeStamps = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleParagraphVisible(): void {
    this.paragraphVisible = !this.paragraphVisible;
    // this.count++;
    // this.clicks.push(this.count);
    const stamp = new Date();
    this.timeStamps.push(stamp);
    // this.time = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()} - ${now.getHours()}.
    // ${now.getMinutes()}.${now.getSeconds()}`;
  }

  getTime(stamp: Date): string {
    return `${stamp.getDate()}.${stamp.getMonth() + 1}.${stamp.getFullYear()} - ${stamp.getHours()}.${stamp.getMinutes()}.${stamp.getSeconds()}`;
  }


}
