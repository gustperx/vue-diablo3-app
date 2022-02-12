import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import type { BlizzardToken } from "../interfaces/aouthStore";

// process.env.DIABLO3_APP_CLIENT_ID
// process.env.DIABLO3_APP_CLIENT_SECRET
const clientId: string = import.meta.env.VITE_DIABLO3_APP_CLIENT_ID;
const clientSecret: string = import.meta.env.VITE_DIABLO3_APP_CLIENT_SECRET;

// API URL para hacer oauth
const region = "us";
const API_URL = `https://${region}.battle.net/oauth/token`;

// Creamos la función getToken
const getToken = (): Promise<AxiosResponse<BlizzardToken>> => {
  const body = new FormData();
  body.append("grant_type", "client_credentials");

  const config: AxiosRequestConfig = {
    headers: { "Content-Type": "multipart/form-data" },
    auth: { username: clientId, password: clientSecret },
  };

  return axios.post<BlizzardToken>(API_URL, body, config);
};

export { getToken };
