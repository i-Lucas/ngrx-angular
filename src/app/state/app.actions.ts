import { createAction, props } from '@ngrx/store';

export const doLogin = createAction(
    '[Login] Do Login',
    props<User>()
);

export const doLoginSuccess = createAction(
    '[API] Do Login Success',
    props<{ user: User }>(),
);

export const doLoginFailure = createAction(
    '[API] Do Login Failure',
    props<{ error: string }>()
);