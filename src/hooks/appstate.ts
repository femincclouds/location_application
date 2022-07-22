
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export const useAppState = () => {
  return useContext(AppContext).state;
}

export const useDispatch = () => {
  return useContext(AppContext).dispatch;
}