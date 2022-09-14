import React, { useContext, useState } from 'react';
import MainContext from '../../store/Context';
import CardValue from '../../components/CardValue';
import './Values.css';
import Header from '../../components/Header';

export default function Values() {
  const { filters, dataReleases, setFilters } = useContext(MainContext);
  const [newRelease, setNewRelease] = useState({
    initialDate: '',
    finalDate: '',
  });

  function totalValue(release) {
    let som = 0;
    for (let i = 0; i < release.length; i += 1) {
      som += parseFloat(release[i].installmentValue);
    }
    return som.toFixed(2);
  }

  const handleInitialDate = ({ target }) => setNewRelease(
    { ...newRelease, initialDate: target.value },
  );
  const handleFinalDate = ({ target }) => setNewRelease(
    { ...newRelease, finalDate: target.value },
  );

  const handleBtn = () => {
    const listOfValues = dataReleases.filter((value) => {
      if (value.installmentDate > newRelease.initialDate
        && value.installmentDate < newRelease.finalDate) {
        return value;
      }
      return null;
    });
    setFilters(listOfValues);
  };

  return (
    <div className="page-main">
      <Header />
      <form className="form2-container">
        <label htmlFor="date" className="legend">
          <p className="label">data inicial</p>
          <input
            type="date"
            placeholder="2022-08-28"
            onChange={ handleInitialDate }
            className="inputs"
          />
        </label>
        <label htmlFor="date" className="legend">
          <p className="label">data final</p>
          <input
            type="date"
            placeholder="2022-08-28"
            onChange={ handleFinalDate }
            className="inputs"
          />
        </label>
      </form>
      <button
        className="buttonCadastrar2"
        type="button"
        onClick={ handleBtn }
      >
        FILTRAR
      </button>
      <div className="containerss-cards">
        {filters.length > 0 && filters.map((value) => (
          <CardValue key={ value.id } data={ value } />
        ))}
      </div>
      <footer className="footer">
        <div className="finalpadding">
          <div className="total-value">
            <p>{ `Valor total: R$ ${totalValue(filters)}` }</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
