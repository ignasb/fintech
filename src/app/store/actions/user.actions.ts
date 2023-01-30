import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/core/models';

export const getProfile = createAction('[User] GET_PROFILE');

export const getProfileSuccess = createAction(
  '[User] GET_PROFILE_SUCCESS',
  props<{ user: UserModel.IUser }>()
);

export const getProfileFail = createAction('[User] GET_PROFILE_FAIL');
