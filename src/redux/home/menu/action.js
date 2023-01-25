import {
  GET_HOME_MENU_LIST,
  GET_HOME_MENU_LIST_SUCCESS,
  GET_HOME_MENU_LIST_FAILURE,
  RESET_HOME_MENU_LIST,
} from 'ActionTypes'

export const getHomeMenuList = (payload) => ({
  type: GET_HOME_MENU_LIST,
  payload,
})
export const getHomeMenuListSuccess = (payload) => ({
  type: GET_HOME_MENU_LIST_SUCCESS,
  payload,
})
export const getHomeMenuListFailure = (error) => ({
  type: GET_HOME_MENU_LIST_FAILURE,
  error,
})
export const resetHomeMenuList = () => ({
  type: RESET_HOME_MENU_LIST,
})
