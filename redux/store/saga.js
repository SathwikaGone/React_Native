import {
  takeEvery,
  call,
  put,
  select,
  take,
  fork,
  all,
  takeLatest,
} from "redux-saga/effects";
import * as Types from "../actions/types";
import { GetDataFromServer, deleteService } from "../services/index";

const baseUrl = "";
function* fetchLoginUser(action) {
  try {
    console.log("saga");
    console.log("Action->" + JSON.stringify(action));
    let formBody = {};
    formBody.email = action.email;
    formBody.password = action.password;
    const loginUrl = baseUrl + "/login";
    const response = yield call(GetDataFromServer, loginUrl, "POST", formBody);
    const result = yield response.json();
    console.log("ADS" + result.workingdetails);
    console.log("Result ->" + JSON.stringify(result));
    console.log("Result Json" + result);
    if (result.error) {
      yield put({
        type: Types.LOGIN_USER_SERVICE_RESPONSE_FAILURE,
        error: result.error,
      });
    } else {
      yield put({ type: Types.LOGIN_USER_SERVICE_RESPONSE_SUCCESS, result });
    }
  } catch (error) {
    // yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
    console.log(error);
  }
}

export default function* rootSaga(params) {
  yield takeLatest(Types.LOGIN_USER, fetchLoginUser);
}
