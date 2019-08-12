import axios from "axios";
import {GET_ERRORS} from "./type"

export const createProject = (project, history) => async dispatch => {
	try {
		//post request to the Spring API passing a valid object
		const res = axios.post("localhost:8080/api/project", project);

		//Push to dashboard route if a valid object is passed
		history.push("/dashboard")

		// If errors occur, pass the error object
	} catch (err) {
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	}
};
