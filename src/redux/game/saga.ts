import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import axiosInstance from "../../api/api";
import {
  requestGamesData,
  requestGamesDataSuccess,
  requestGamesDataFail,
} from "./actions";

function* myFunc() {
  let data: any;
  let error: any;

  yield axiosInstance
    .get("api/1.0/deals?storeID=1&upperPrice=15")
    .then((resp) => {
      data = resp.data;
    })
    .catch((err) => {
      error = err;
    });

    console.log(data);

  yield !error && data && put(requestGamesDataSuccess(data));
  yield error && !data && put(requestGamesDataFail(error));
}

export function* gameSaga() {
  yield takeLatest(requestGamesData, myFunc);
}
