import {createStore,combineReducers} from "redux";
import employeesReducer from "./reducers/employees";
import loginReducer from "./reducers/login";

const store =createStore(combineReducers({employeesReducer,loginReducer}));

export default store;