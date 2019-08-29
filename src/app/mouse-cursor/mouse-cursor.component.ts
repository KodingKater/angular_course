import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.scss']
})
export class MouseCursorComponent implements OnInit {
  x: number;
  y: number;
  mouseButtonCounter = 0;

  constructor() {
  }

  onMouseMove(event: MouseEvent){
    this.x = event.clientX;
    this.y = event.clientY;
  }

  onMouseClick(event: MouseEvent){
    this.mouseButtonCounter += 1;
  }

  ngOnInit() {
  }

}
