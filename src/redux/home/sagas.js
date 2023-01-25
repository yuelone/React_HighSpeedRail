import { all } from 'redux-saga/effects'

import menu from './menu/saga'

export default function* rootSaga() {
  yield all([menu()])
}
