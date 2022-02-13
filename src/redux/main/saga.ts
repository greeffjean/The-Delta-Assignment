import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import axiosInstance from "../../api/api";
import { genStoreMap } from "../../utils/misc/mapGenerator";
import {
  requestGamesData,
  requestGamesDataSuccess,
  requestGamesDataFail,
  requestDealLookup,
  requestDealLookupSuccess,
} from "./actions";

function* requestDealLookupSuccessFunc() {
  let data: any;
  let error: any;

  yield axios
    .all([
      axios.get(
        "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15"
      ),
      axios.get("https://www.cheapshark.com/api/1.0/stores"),
    ])
    .then(
      axios.spread((resp1, resp2) => {
        data = {
          deals: resp1.data,
          stores: genStoreMap(resp2.data),
        };
      })
    )
    .catch((err) => (error = err));

  yield !error && data && put(requestGamesDataSuccess(data));
  yield error && !data && put(requestGamesDataFail(error));
}

function* reqDealLookupFunc(action: any) {
  let data: any;
  let error: any;

  yield axiosInstance
    .get(`https://www.cheapshark.com/api/1.0/deals?id=${action.payload}`)
    .then((response) => {
      data = response.data;
    })
    .catch((err) => (error = err));

  yield !error && data && put(requestDealLookupSuccess(data));
  yield error && !data && put(requestGamesDataFail(error));
}

export function* mainSaga() {
  yield takeLatest(requestGamesData, requestDealLookupSuccessFunc);
  yield takeLatest(requestDealLookup, reqDealLookupFunc);
}
