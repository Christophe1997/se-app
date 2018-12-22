import {CLOSE_SIDEBAR, FETCH_FAILURE, FETCH_STARTED, FETCH_SUCCESS, OPEN_SIDEBAR} from "./actionTypes";

export const openSideBar = () => ({
  type: OPEN_SIDEBAR,
});

export const closeSideBar = () => ({
  type: CLOSE_SIDEBAR
});


export const fetchPatientStarted = () => ({
  type: FETCH_STARTED
});

export const fetchPatientSucess = (result) => ({
  type: FETCH_SUCCESS,
  result
});

export const fetchPatientFailure = (error) => ({
  type: FETCH_FAILURE,
  error
});

export const fetchPatient = (values) => {
  return (dispatch) => {

    const queryString = Object.keys(values).map(key =>
      encodeURIComponent(key) + '=' + encodeURIComponent(values[key])).join('&');
    const apiUrl = `/api/patients/keyword?${queryString}`;

    dispatch(fetchPatientStarted());

    return fetch(apiUrl).then(response => {
      if (response.status !== 200) {
        throw new Error('Fail to get response with status ' + response.status);
      }
      response.json().then(responseJson => {
        dispatch(fetchPatientSucess(responseJson._embedded.patientList));
      }).catch(error => {
        dispatch(fetchPatientFailure(error));
      });
    }).catch(error => {
      dispatch(fetchPatientFailure(error));
    })

  };
};