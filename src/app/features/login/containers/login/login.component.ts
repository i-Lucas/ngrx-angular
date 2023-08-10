import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.reducer';
import * as fromAppActions from "../../../../state/app.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  protected form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private store: Store<AppState>) { }

  login() {

    if (!this.form.value.name || !this.form.value.email) return alert("erro");

    const user: User = {
      name: this.form.value.name,
      email: this.form.value.email,
    };

    this.store.dispatch(fromAppActions.doLogin(user));
  }

}



