import {
  GET_HOME_MENU_LIST,
  GET_HOME_MENU_LIST_SUCCESS,
  GET_HOME_MENU_LIST_FAILURE,
  RESET_HOME_MENU_LIST,
} from 'ActionTypes'

const initialState = {
  menuListDataLoading: null,
  menuListData: [],
  menuListDataError: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_MENU_LIST:
      return {
        ...state,
        menuListDataLoading: true,
        menuListData: [],
        menuListDataError: null,
      }
    case GET_HOME_MENU_LIST_SUCCESS:
      return {
        ...state,
        menuListDataLoading: false,
        menuListData: action.payload,
      }
    case GET_HOME_MENU_LIST_FAILURE:
      return {
        ...state,
        menuListDataLoading: false,
        menuListDataError: action.error,
      }
    case RESET_HOME_MENU_LIST:
      return {
        ...state,
        menuListDataLoading: null,
        menuListData: [],
        menuListDataError: null,
      }
    default:
      return state
  }
}

export default reducer
