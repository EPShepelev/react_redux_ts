import { combineReducers } from "redux";
import { UserReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  todo: todoReducer,
});

// получаем тип редюсера, чтобы использовать в хуке для типизированного селектора
export type RootState = ReturnType<typeof rootReducer>;
