const axios = require('axios').default;

const URL = 'https://releases-app-backend.herokuapp.com//releases';

const URL2 = 'https://releases-app-backend.herokuapp.com//values';

const getReleases = async () => {
  try {
    const result = await axios.get(`${URL}`);
    return result;
  } catch (e) {
    return e.response.status;
  }
};

const postReleases = async ({ name, totalValue, installments, releaseDate, status }) => {
  try {
    const result = await axios.post(
      `${URL}`, { name, totalValue, installments, releaseDate, status },
    );
    return result.status;
  } catch (e) {
    return e.response.status;
  }
};

const changeStatus = async (id) => {
  try {
    const statusS = 'Paid';
    const result = await axios.put(
      `${URL}/:${id}`,
      statusS,
    );
    return result.status;
  } catch (e) {
    return e.response.status;
  }
};

const getValues = async () => {
  try {
    const result = await axios.get(`${URL2}`);
    return result;
  } catch (e) {
    return e.response.status;
  }
};

export {
  postReleases,
  getReleases,
  changeStatus,
  getValues,
};
