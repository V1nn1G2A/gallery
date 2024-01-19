import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 5000, // время ожидания запроса
});

export async function getProducts() {
  try {
    const response = await instance.get("/products/getAll");

    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export default instance;