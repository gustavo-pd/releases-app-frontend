import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { changeStatus } from '../services/api';
import './CardRelease.css';

export default function CardRelease({ data }) {
  const { id, name, totalValue, installments, releaseDate } = data;
  const [statuss, setStatuss] = useState('Not paid');

  function buttonHandle(idk) {
    setStatuss('Paid');
    changeStatus(idk);
  }

  return (
    <div className="cardRelease" id={ id }>
      <p className="p-name">{ name }</p>
      <p className="p-card">{ totalValue }</p>
      <p className="p-card">{ installments }</p>
      <p className="p-card">{ releaseDate }</p>
      <button
        className="p-status"
        type="button"
        onClick={ () => buttonHandle(id) }
      >
        { statuss }
      </button>
    </div>
  );
}

CardRelease.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    totalValue: PropTypes.number,
    id: PropTypes.number,
    installments: PropTypes.number,
    releaseDate: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};
