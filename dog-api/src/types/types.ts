import type { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

export type ReduxState = {
  isFetching: boolean;
  imageURL: string;
  errorMessage: string;
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
