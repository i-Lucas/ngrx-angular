import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.reducer';

import * as fromAppSelectors from "../../../../state/app.selectors"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  protected name$!: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.name$ = this.store.pipe(select(fromAppSelectors.selectUserName));
  }
}
