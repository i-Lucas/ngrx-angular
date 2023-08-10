import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: "<router-outlet />",
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get title(): string {
    return 'Angular State NgRx';
  }
}
