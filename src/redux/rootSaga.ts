
import { all, fork } from 'redux-saga/effects'
import { mainSaga } from './main/saga'


export default function* rootSaga() {
    yield all([
      fork(mainSaga)
    ])
  }