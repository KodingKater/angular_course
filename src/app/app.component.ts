import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'CoolNewProject';
  superFancyOtherTitle = 'Horst-Rüdiger Ludooolf';

  onTitleClick(event: string) {
    // this.superFancyOtherTitle = event;
    console.log(event);
  }
}
