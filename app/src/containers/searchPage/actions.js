import {
  CLOSE_SIDEBAR,
  FETCH_FAILURE,
  FETCH_STARTED,
  FETCH_SUCCESS,
  OPEN_SIDEBAR,
  CHANGE_PAGE,
  CHANGE_PER_PAGE,
  CLICK_ONE,
  REQUEST_SORT,
  SELECT_ALL, SELECT_OPEN
} from "./actionTypes";

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
    const queryString = Object.keys(values).map(key => {
      let value = values[key];
      if (key === "gender") {
        value = value === "female" ? "女" : "男";
      }
      return encodeURIComponent(key) + '=' + encodeURIComponent(value)
    }).join('&');
    const apiUrl = `/api/patients/keyword?${queryString}`;

    dispatch(fetchPatientStarted());

    return fetch(apiUrl).then(response => {
      if (response.status !== 200) {
        throw new Error('Fail to get response with status ' + response.status);
      }
      response.json().then(responseJson => {
        console.log(responseJson);
        dispatch(fetchPatientSucess(responseJson._embedded.patientList));
      }).catch(error => {
        dispatch(fetchPatientFailure(error));
      });
    }).catch(error => {
      dispatch(fetchPatientFailure(error));
    })

  };
};

export const requestSort = (event, property) => ({
  type: REQUEST_SORT,
  event,
  property
});

export const selectAll = event => ({
  type: SELECT_ALL,
  event
});

export const clickOne = (event, id) => ({
  type: CLICK_ONE,
  event,
  id
});

export const changePage = (event, page) => ({
  type: CHANGE_PAGE,
  page
});

export const changePerPage = (event) => ({
  type: CHANGE_PER_PAGE,
  event
});

export const selectOpen = () => ({
  type: SELECT_OPEN,
});