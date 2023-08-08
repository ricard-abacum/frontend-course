import { default as axios } from "axios";

export const api = {
  getProducts: () => axios.get(process.env.REACT_APP_BACKEND_URL + "/slots"),
  order: (request_data: {}) =>
    axios.post(process.env.REACT_APP_BACKEND_URL + "/order/", request_data),
  addCredit: (amount: number) =>
    axios.post(process.env.REACT_APP_BACKEND_URL + "/add-credit/", {
      amount: amount,
    }),
  getProfile: () => axios.get(process.env.REACT_APP_BACKEND_URL + "/profile/"),
  refund: () => axios.post(process.env.REACT_APP_BACKEND_URL + "/refund/"),
  login: (username: string, password: string) =>
    axios.post(process.env.REACT_APP_BACKEND_URL + "/login/", {
      username: username,
      password: password,
    }),
  logout: () => axios.post(process.env.REACT_APP_BACKEND_URL + "/logout/"),
};

export const simulateRequest = (mock: any): Promise<{ data: any }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: mock });
    }, 1000);
  });
};
