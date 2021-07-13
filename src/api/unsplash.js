import axios from "axios";

const UNSPLASH = process.env.REACT_APP_ACCESS_KEY;

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${UNSPLASH}`,
  },
});
