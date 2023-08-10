import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ListState } from './list.reducer';

export const selectListState = createFeatureSelector('list');

export const selectListEntities = createSelector(
  selectListState,
  (state: any) => state.entities,
);

export const selectListLoading = createSelector(
  selectListState,
  (state: any) => state.loading,
);

export const selectListLoadingMore = createSelector(
  selectListState,
  (state: any) => state.loadingMore,
);

export const selectListEerror = createSelector(
  selectListState,
  (state: any) => state.error,
);

export const selectListPage = createSelector(
  selectListState,
  (state: any) => state.page,
);

export const selectListCreating = createSelector(
  selectListState,
  (state: any) => state.creating,
);

export const selectListRemoving = createSelector(
  selectListState,
  (state: any) => state.removing,
);
