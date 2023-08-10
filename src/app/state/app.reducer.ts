import { Action, createReducer, on } from "@ngrx/store"
import * as fromAppActions from './app.actions';

export interface AppState {
    user: User | undefined;
};

export const initialState: AppState = {
    user: undefined
};

const appStateReducer = createReducer(
    initialState,

    on(fromAppActions.doLoginSuccess, (state, { user }) => ({
        ...state,
        user,
    }),

    ),
);

export function appReducer(state: AppState | undefined, action: Action): AppState {
    return appStateReducer(state, action);
};