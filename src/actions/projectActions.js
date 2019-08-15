import axios from "axios";
import {GET_ERRORS, GET_ONEPROJECT, GET_PROJECTS} from "./type"

export const createProject = (project, history) => async dispatch => {

	// Post request to the Spring API passing a valid Project Object using Axios
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

export const getProjects = () => async dispatch => {
	const res = await axios.get("http://localhost:8080/api/project/all");
	dispatch({
		type: GET_PROJECTS,
		payload: res.data
	})
};


export const getOneProject = (id, history) => async dispatch => {
	const res = await axios.get(`http://localhost:8080/api/project/${id}` )
	dispatch({
		type: GET_ONEPROJECT,
		payload: res.data
	})
};