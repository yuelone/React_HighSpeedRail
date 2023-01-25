import { all, put, takeLatest, call } from 'redux-saga/effects'
import axios from 'Util/noAuth'
import { GET_HOME_MENU_LIST } from 'ActionTypes'
import { getHomeMenuListSuccess, getHomeMenuListFailure } from 'Redux/actions'

const FAKE_HOME_MENU_LIST_DATA = {
  messageid: '0',
  messageDesc: '系統錯誤',
  content: {
    userAcct: '53778',
    userName: '林OO',
    lastLoginTime: '2022/02/16 11:02:56',
    lastErrorTime: '2022/02/16 10:36:49',
    todoListCnt: '45',
  },
}

function getHomeMenuListApi() {
  return IS_DEV_ENV ? FAKE_HOME_MENU_LIST_DATA : axios.get('/test/test').then((res) => res.data)
}

function* getHomeMenuListSaga() {
  try {
    const response = yield call(getHomeMenuListApi)

    if (response.messageid !== '0') throw response

    const resultData = response.content

    console.table(resultData)

    yield put(getHomeMenuListSuccess(resultData))
  } catch (err) {
    console.error(err)
    const errorMessage = {
      message: err.messageid !== '0' ? err.messageDesc : '',
    }
    yield put(getHomeMenuListFailure(errorMessage))
  }
}

function* rootSaga() {
  yield all([takeLatest(GET_HOME_MENU_LIST, getHomeMenuListSaga)])
}

export default rootSaga
