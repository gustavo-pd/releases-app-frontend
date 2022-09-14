import React from 'react';
import PropTypes from 'prop-types';
import './CardValue.css';

export default function CardValue({ data }) {
  const { id, name, installmentValue, installmentDate } = data;
  const SIX = 6;

  return (
    <div className="card" id={ id }>
      <div className="container-labels">
        <p className="label-cards">nome</p>
        <p className="p-name2">{ name.substr(0, SIX) }</p>
      </div>
      <div className="container-labels">
        <p className="label-cards">valor</p>
        <p className="p-value2">{ `R$ ${installmentValue}` }</p>
      </div>
      <div className="container-labels">
        <p className="label-cards">data</p>
        <p className="p-card">{ installmentDate }</p>
      </div>
    </div>
  );
}

CardValue.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    installmentValue: PropTypes.number,
    installmentDate: PropTypes.string,
  }).isRequired,
};
