import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];
const winChrome = window.navigator.userAgent.includes("Chrome");
let store;

if(winChrome) {
	store = createStore(
		rootReducer,
		initialState,
		compose(applyMiddleware(...middleware),
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()))
} else {
	store = createStore(
		rootReducer,
		initialState,
		compose(applyMiddleware(...middleware))
	);
}

export default  store;