import React, { useEffect, useState } from 'react';
import { getReleases, postReleases } from '../../services/api';
import CardRelease from '../../components/CardRelease';
import './Releases.css';
import Header from '../../components/Header';

export default function Releases() {
  const [data, setData] = useState([]);
  const [newRelease, setNewRelease] = useState({
    name: '',
    totalValue: '',
    installments: '',
    releaseDate: '',
    status: 'Not paid',
  });

  const handleName = ({ target }) => setNewRelease(
    { ...newRelease, name: target.value },
  );

  const handleValue = ({ target }) => setNewRelease(
    { ...newRelease, totalValue: target.value },
  );

  const handleInstallments = ({ target }) => setNewRelease(
    { ...newRelease, installments: target.value },
  );

  const handleDate = ({ target }) => setNewRelease(
    { ...newRelease, releaseDate: target.value },
  );

  const MIN_DATE = 10;
  const MIN_NAME = 5;
  const disableButton = newRelease.name.length >= MIN_NAME
    && newRelease.totalValue.length >= 1
    && newRelease.installments.length >= 1
    && newRelease.releaseDate.length >= MIN_DATE;

  useEffect(() => {
    const getAllReleases = async () => {
      const resolve = await getReleases();
      console.log(resolve);
      setData(resolve.data);
    };
    getAllReleases();
  }, []);

  function totalValue(release) {
    let som = 0;
    for (let i = 0; i < release.length; i += 1) {
      som += parseInt(release[i].totalValue, 10);
    }
    return som.toFixed(2);
  }

  const validateUser = () => {
    postReleases(newRelease)
      .then((v) => setStatusCode(v));
  };

  return (
    <>
      <Header />
      <div className="form">
        <h3 className="title">Cadastrar novo lançamento</h3>
        <br />
        <form className="form-container">
          <label htmlFor="name" className="legenda">
            <p className="label">nome</p>
            <input
              type="text"
              placeholder="Jorginho da Silva"
              onChange={ handleName }
              className="input"
            />
          </label>
          <label htmlFor="email" className="legenda">
            <p className="label">valor</p>
            <input
              type="number"
              placeholder="850.00"
              onChange={ handleValue }
              className="input"
            />
          </label>
          <label htmlFor="password" className="legenda">
            <p className="label">parcelas</p>
            <input
              type="number"
              placeholder="1"
              onChange={ handleInstallments }
              className="input"
            />
          </label>
          <label htmlFor="date" className="legenda">
            <p className="label">data</p>
            <input
              type="date"
              placeholder="2022-08-28"
              onChange={ handleDate }
              className="input"
            />
          </label>
        </form>
        <button
          className="buttonCadastrar"
          type="button"
          disabled={ !disableButton }
          onClick={ () => validateUser() }
        >
          CADASTRAR
        </button>
      </div>
      <div className="container-cards">
        {data.length > 0 && data.map((release) => (
          <CardRelease key={ data.id } data={ release } />
        ))}
      </div>
      <div className="finalpadding">
        <div className="total-value">
          <p>Valor total</p>
          <p>{ `R$ ${totalValue(data)}` }</p>
        </div>
      </div>
    </>
  );
}
