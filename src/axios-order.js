import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-cc4ec-default-rtdb.firebaseio.com/",
});
export default instance;
