import { all, put, takeLatest, call } from 'redux-saga/effects'
import axios from 'Util/noAuth'
import { GET_HOME_MENU_LIST } from 'ActionTypes'
import { getHomeMenuListSuccess, getHomeMenuListFailure } from 'Redux/actions'
import FAKE_HOME_MENU_LIST_DATA from '../../../../db.json'

function getHomeMenuListApi() {
  return IS_DEV_ENV ? FAKE_HOME_MENU_LIST_DATA : axios.get('menu').then((res) => res.data)
}

function* getHomeMenuListSaga() {
  try {
    const response = yield call(getHomeMenuListApi)

    if (IS_DEV_ENV) {
      if (response.menu[0].messageid !== '0') throw response
    } else if (response[0].messageid !== '0') throw response

    const resultData = IS_DEV_ENV ? response.menu[0].content : response[0].content

    console.table(resultData)

    yield put(getHomeMenuListSuccess(resultData))
  } catch (err) {
    console.error(err)
    const errorMessage = {
      message: IS_DEV_ENV
        ? err.menu[0].messageid !== '0'
          ? err.menu[0].messageDesc
          : ''
        : err[0].messageid !== '0'
        ? err[0].messageDesc
        : '',
    }
    yield put(getHomeMenuListFailure(errorMessage))
  }
}

function* rootSaga() {
  yield all([takeLatest(GET_HOME_MENU_LIST, getHomeMenuListSaga)])
}

export default rootSaga
