import React from 'react';
//import PropTypes from 'prop-types'
import moment from 'moment';

const LocalDate = ({value}) => {
  if(value === undefined){
    return ('');
  }

  var date = moment(value);
  return (
    <span>
      {date.format('DD/MM/YYYY')}
    </span>
  );
};

// LocalDate.propTypes = {
//   value: PropTypes.string.isRequired
// };

export default LocalDate;