import { default as axios } from "axios";

export const api = {
  getProducts: () => axios.get(process.env.BACKEND_URL + "/products"),
  order: (request_data: {}) =>
    axios.post(process.env.BACKEND_URL + "/order", request_data),
  addCredit: (amount: number) =>
    axios.post(process.env.BACKEND_URL + "/add-credit", { amount: amount }),
  login: ({ user, password }: { user: string; password: string }) =>
    axios.post(process.env.BACKEND_URL + "/login", {
      user: user,
      password: password,
    }),
  logout: () => axios.post(process.env.BACKEND_URL + "/logout"),
};
