import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const TMDB_API_KEY = import.meta.env.VITE_API_KEY;

const headers = {
  Authorization: `Bearer ${TMDB_API_KEY}`,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers: headers,
      params: params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
