import { createReducer, on } from '@ngrx/store';
import { UserModel } from 'src/app/core/models';
import { UserActions } from '../actions';

export interface IUserState {
  data: UserModel.IUser;
  isLoading: boolean;
}

const initialState: IUserState = {
  data: {} as UserModel.IUser,
  isLoading: false,
};

export const userReducer = createReducer<IUserState>(
  initialState,
  on(UserActions.getProfile, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(UserActions.getProfileSuccess, (state, { user }) => ({
    ...state,
    data: { ...user },
    isLoading: false,
  })),
  on(UserActions.getProfileFail, (state) => ({
    ...state,
    isLoading: false,
  }))
);
