import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-70b3b-default-rtdb.firebaseio.com/",
});
 
export default instance ;