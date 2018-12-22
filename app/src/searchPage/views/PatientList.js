import React from 'react';

export const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILURE: 'failure'
};

const PatientList = ({ status, patientList, data, error }) => {
  switch (status) {
    case STATUS.LOADING:
      return (
        <div>
          loading
        </div>
      );

    case STATUS.SUCCESS:
      return (
        <div>
        </div>
      );

    case STATUS.FAILURE:
      return (
        <div>

        </div>
      );

    default:
      throw new Error('unexcepted status ' + status)
  }
};

export default PatientList
