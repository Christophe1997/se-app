import {CLOSE_SIDEBAR, OPEN_SIDEBAR} from "./actionTypes";

export const openSideBar = () => ({
  type: OPEN_SIDEBAR,
});

export const closeSideBar = () => ({
  type: CLOSE_SIDEBAR
});