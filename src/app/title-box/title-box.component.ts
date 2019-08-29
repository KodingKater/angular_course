import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit {
  @Input() titleToShow: string;
  @Output() titleClicked =  new EventEmitter<string>();


  constructor() {
    this.titleToShow = 'NoTitle provided';
  }

  ngOnInit() {
  }

  sendPing() {
    this.titleClicked.emit('Yo, I bims dein lieber Title.');
  }
}
