import axios from "axios";

export const API_KEY: string = "4107c833d13f4eb186a631ed719a10e5";

export const http = axios.create({
  baseURL: `https://api.opencagedata.com/geocode/v1/json`,
});
