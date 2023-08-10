import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectUserContext = createFeatureSelector('userContext');

export const selectUserName = createSelector(
    selectUserContext,
    (state: any) => state.user?.name,
)