import { combineReducers } from "redux";
import { UserReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: UserReducer,
});

// получаем тип редюсера, чтобы использовать в хуке для типизированного селектора
export type RootState = ReturnType<typeof rootReducer>;
