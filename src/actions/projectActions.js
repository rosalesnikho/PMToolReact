import axios from "axios";
import {GET_ERRORS} from "./type"

export const createProject = (project, history) => async dispatch => {

	// Post request to the Spring API passing Axios
	// Push to dashboard route if a valid object is passed
	// If errors occur, pass the error object
	try {
		const res = await axios.post("http://localhost:8080/api/project", project);
		history.push("/dashboard")
	} catch (err) {
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	}
};
