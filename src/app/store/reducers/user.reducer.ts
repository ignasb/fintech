import { createReducer, on } from '@ngrx/store';
import { UserModel } from 'src/app/shared/models';
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
  on(UserActions.login, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(UserActions.loginSuccess, (state, { user }) => ({
    ...state,
    isLoading: false,
    data: { ...user },
  })),
  on(UserActions.loginFail, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
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
  on(UserActions.getProfileFail, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(UserActions.updateProfile, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(UserActions.updateProfileSuccess, (state, { user }) => ({
    ...state,
    isLoading: false,
    data: { ...user },
  })),
  on(UserActions.updateProfileFail, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error,
    };
  })
);
