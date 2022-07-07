import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "./counterReducer";


type RootAppStoreType = typeof store;
export type RootAppStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    counter: counterReducer
})

let store = createStore(rootReducer)

export default store;