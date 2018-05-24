import { createSelector } from 'reselect';

const user$ = state => state.user;
export const userSelector = createSelector(user$, user => ({
  user,
}));

const auth$ = state => state.auth;
export const authSelector = createSelector(auth$, auth => ({
  auth,
}));
