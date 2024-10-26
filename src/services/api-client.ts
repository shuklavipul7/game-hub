import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4ac422000eb54282be6e174898dc2dc3",
  },
});
