import { http } from "./adapter";

export const api = {
  get: async (endpoint: string, params?: any) => {
    const res = await http.get(endpoint, { params });
    return res.data;
  },

  post: async (endpoint: string, body: any) => {
    const res = await http.post(endpoint, body);
    return res.data;
  },

  put: async (endpoint: string, body: any) => {
    const res = await http.put(endpoint, body);
    return res.data;
  },

  delete: async (endpoint: string) => {
    const res = await http.delete(endpoint);
    return res.data;
  },
};
