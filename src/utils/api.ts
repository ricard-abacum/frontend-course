import { default as axios } from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

export const api = {
  getProducts: () => axios.get(process.env.REACT_APP_BACKEND_URL + "/slots"),
  order: (request_data: {}) =>
    axios.post(process.env.REACT_APP_BACKEND_URL + "/order/", request_data, {
      withCredentials: true,
    }),
  addCredit: (amount: number) =>
    axios.post(
      process.env.REACT_APP_BACKEND_URL + "/add-credit/",
      {
        amount: amount,
      },
      { withCredentials: true }
    ),
  getProfile: () =>
    axios.get(process.env.REACT_APP_BACKEND_URL + "/profile/", {
      withCredentials: true,
    }),
  refund: () =>
    axios.post(
      process.env.REACT_APP_BACKEND_URL + "/refund/",
      {},
      { withCredentials: true }
    ),
  login: (username: string, password: string) =>
    axios.post(
      process.env.REACT_APP_BACKEND_URL + "/login/",
      {
        username: username,
        password: password,
      },
      { withCredentials: true }
    ),
  logout: () =>
    axios.post(
      process.env.REACT_APP_BACKEND_URL + "/logout/",
      {},
      { withCredentials: true }
    ),
};

export const simulateRequest = (mock: any): Promise<{ data: any }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: mock });
    }, 1000);
  });
};
