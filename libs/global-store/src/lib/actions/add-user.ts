import { createAction, props } from "@ngrx/store";

export const addUser = createAction(
  '[Home Page] Add User',
  props<{ username: string;  }>()
);
