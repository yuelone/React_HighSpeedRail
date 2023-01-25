import { all } from 'redux-saga/effects'

import menu from './home/menu/saga'

export default function* rootSaga() {
  yield all([menu()])
}
