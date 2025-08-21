import axios from "axios";

const API_KEY = "wmBMPm8FYVHYDyk3xUA5cjI2Eb60qHaY";

const nytApi = axios.create({
  baseURL: "https://api.nytimes.com/svc",
  params: {
    "api-key": API_KEY,
  },
});

export default nytApi;
