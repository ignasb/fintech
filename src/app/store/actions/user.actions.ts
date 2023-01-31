import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/shared/models';

// User login
export const login = createAction(
  '[User] LOGIN',
  props<{ credentials: UserModel.IUserLogin }>()
);
export const loginSuccess = createAction(
  '[User] LOGIN_SUCCESS',
  props<{ user: UserModel.IUser }>()
);
export const loginFail = createAction(
  '[User] LOGIN_FAIL',
  props<{ error: string }>()
);

// Get profile
export const getProfile = createAction('[User] GET_PROFILE');
export const getProfileSuccess = createAction(
  '[User] GET_PROFILE_SUCCESS',
  props<{ user: UserModel.IUser }>()
);
export const getProfileFail = createAction(
  '[User] GET_PROFILE_FAIL',
  props<{ error: string }>()
);

// Update profile
export const updateProfile = createAction(
  '[User] UPDATE_PROFILE',
  props<{ user: UserModel.IUser }>()
);
export const updateProfileSuccess = createAction(
  '[User] UPDATE_PROFILE_SUCCESS',
  props<{ user: UserModel.IUser }>()
);
export const updateProfileFail = createAction(
  '[User] UPDATE_PROFILE_FAIL',
  props<{ error: string }>()
);
