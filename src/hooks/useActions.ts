import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
// импортируем все action creator'ы
import * as UserActionCreators from "../store/action_creators/user";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionCreators, dispatch);
};
