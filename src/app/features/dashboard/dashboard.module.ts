import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { listReducer } from './state/list.reducer';
import { ListEffects } from './state/list.effects';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ListItemComponent } from './containers/list-item/list-item.component';
import { ListComponent } from './containers/list/list.component';
import { CreateTodoComponent } from './containers/create-todo/create-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LastTodosComponent } from './containers/last-todos/last-todos.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ListItemComponent,
    ListComponent,
    CreateTodoComponent,
    LastTodosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    StoreModule.forFeature('list', listReducer),
    EffectsModule.forFeature([ListEffects]),

    RouterModule.forChild([
      { path: "", component: DashboardComponent },
      {
        path: 'list',
        component: ListComponent,
      },
    ])
  ]
})
export class DashboardModule { }
