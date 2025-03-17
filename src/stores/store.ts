import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cfoReducer from "./CFO/Slice/index"

export const store = configureStore({
  reducer: {
    cfo: cfoReducer,
   
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store