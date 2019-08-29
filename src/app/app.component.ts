import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'CoolNewProject';
  superFancyOtherTitle = 'BookListe 9000';

  onTitleClick(event: string) {
    // this.superFancyOtherTitle = event;
    console.log(event);
  }
}
