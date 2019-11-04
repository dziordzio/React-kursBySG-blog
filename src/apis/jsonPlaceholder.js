// jsonPlaceholder - bo serwis też się tak właśnie nazywa.
import axios from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});
