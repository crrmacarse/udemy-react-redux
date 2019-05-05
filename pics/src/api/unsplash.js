import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 3841fcf79d1974398e1889f4b16d558c24831c072b34251d36625971b3ae71e1"
  }
});
