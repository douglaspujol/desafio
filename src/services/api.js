import axios from 'axios';

// cuidar versão do axios. A nova versão não envia parametros.
const publicKey = '08e4e749bdef8a0263c73379f9c51091';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com',
  params: {
    ts: '1',
    apikey: publicKey,
    hash: '93b4aea297134eb502fe583a32f6cd8e',
  },
});

export default api;
