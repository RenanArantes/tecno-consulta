import axios from 'axios';

const apiRF = axios.create({
  baseURL: 'https://www.receitaws.com.br/v1/cnpj/',
});

export default apiRF;
