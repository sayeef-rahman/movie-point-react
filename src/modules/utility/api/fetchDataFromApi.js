import axios from "axios";

const base_url = "https://api.themoviedb.org/3";
const TMDB_API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmFlODkwMjg2ZmNjNjE2YjNhMTU3Y2JjMGQ2Zjc0YiIsInN1YiI6IjY1ZDYwNjc0YzhhNWFjMDE2MmUxNWJjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0zsU8unqUIp7O4ZggXxHuCxS4oOZoCUvto6X7bWLVQo";

// console.log(TMDB_API_KEY);
const headers = {
  Authorization: `Bearer ${TMDB_API_KEY}`,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(base_url + url, {
      headers: headers,
      params: params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
