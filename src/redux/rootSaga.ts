
import { all, fork } from 'redux-saga/effects'
import { gameSaga } from './game/saga'


export default function* rootSaga() {
    yield all([
      fork(gameSaga)
    ])
  }