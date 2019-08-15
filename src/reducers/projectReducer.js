import {GET_PROJECTS, GET_ONEPROJECT} from "../actions/type";

const initialState = {
	projects: [],
	project: {}
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_PROJECTS:
			return {
				...state,
				projects: action.payload
			};
		case GET_ONEPROJECT:
			return {
				...state,
				project: action.payload
			};
		default:
			return state;
	}
}