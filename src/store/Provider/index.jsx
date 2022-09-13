import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MainContext from '../Context';
import { getValues } from '../../services/api';

function MainProvider({ children }) {
  const [dataReleases, setDataReleases] = useState([]);
  const [filters, setFilters] = useState([]);

  const getAllValues = async () => {
    const resolve = await getValues();
    console.log(resolve);
    setDataReleases(resolve.data);
  };

  useEffect(() => {
    getAllValues();
  }, []);

  useEffect(() => {
    setFilters(dataReleases);
  }, [dataReleases]);

  const stateDefault = {
    dataReleases,
    filters,
    setFilters,
  };

  return (
    <MainContext.Provider value={ stateDefault }>
      { children }
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default MainProvider;
