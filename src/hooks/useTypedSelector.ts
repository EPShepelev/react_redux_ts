import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";

// в TypedUseSelectorHook (из react-redux) передаем созданный нами тип RootState
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
