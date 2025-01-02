import axios from 'axios';

const API_URL = 'https://echo-6sdzv54itq-uc.a.run.app/natiq';

export const callNatiq = async (text: string) => {
  const response = await axios.post(API_URL, { text }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};
