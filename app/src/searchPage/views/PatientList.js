import React from 'react';
import PropTypes from 'prop-types';
import {view as Table} from '../../table'

export const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILURE: 'failure'
};

const PatientList = ({ status, data, error }) => {
  switch (status) {
    case STATUS.LOADING:
      return (
        <div>
          waiting for query
        </div>
      );

    case STATUS.SUCCESS:
      return (
        <div>
          <Table data={data} page={0} rowsPerPage={5} order='asc' orderBy='name'/>
        </div>
      );

    case STATUS.FAILURE:
      return (
        <div>
          {error}
        </div>
      );

    default:
      throw new Error('unexcepted status ' + status)
  }
};

PatientList.propTypes = {
  status: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired
};

export default PatientList
