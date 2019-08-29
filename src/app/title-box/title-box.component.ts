import {Component, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit {
  @Input() titleToShow: string;

  constructor() {
    this.titleToShow = 'NoTitle provided';
  }

  ngOnInit() {
  }

}
