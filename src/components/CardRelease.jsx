import React from 'react';
import PropTypes from 'prop-types';
import { changeStatus } from '../services/api';
import './CardRelease.css';

export default function CardRelease({ data }) {
  const { id, name, totalValue, installments, releaseDate, paid } = data;
  const SIX = 6;

  function buttonHandle(idk) {
    changeStatus(idk);
  }

  return (
    <div className="cardRelease" id={ id }>
      <div className="container-labels">
        <p className="label-cards">nome</p>
        <p className="p-name">{ name.substr(0, SIX) }</p>
      </div>
      <div className="container-labels">
        <p className="label-cards">valor</p>
        <p className="p-value">{ `R$ ${totalValue}` }</p>
      </div>
      <div className="container-labels">
        <p className="label-cards">parcelas</p>
        <p className="p-card">{ installments }</p>
      </div>
      <div className="container-labels">
        <p className="label-cards">data</p>
        <p className="p-date">{ releaseDate }</p>
      </div>
      <button
        className="p-statusz"
        type="button"
        onClick={ () => buttonHandle(id) }
      >
        { paid ? <p className="p-paid">Pago</p> : <p className="p-paid2">Não pago</p> }
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
    paid: PropTypes.bool,
  }).isRequired,
};
