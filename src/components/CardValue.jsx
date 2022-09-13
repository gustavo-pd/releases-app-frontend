import React from 'react';
import PropTypes from 'prop-types';
import './CardValue.css';

export default function CardValue({ data }) {
  const { id, installmentValue, installmentDate } = data;

  return (
    <div className="card" id={ id }>
      <p className="p-card">{ installmentValue }</p>
      <p className="p-card">{ installmentDate }</p>
    </div>
  );
}

CardValue.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    installmentValue: PropTypes.number,
    installmentDate: PropTypes.string,
  }).isRequired,
};
