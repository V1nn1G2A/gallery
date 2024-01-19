import { parsingData } from "./parsingData";
import { fetchSuccsess, fetchFailed } from "../store/reducer/dataSlice";

export async function useFetch(dispatch) {
  const key = "AAuC1m2vJCzAl_6xjsi1FPxu5WBZ0DTDCzTmuwXORmQ";
  const url =
    "https://api.unsplash.com/photos/random?client_id=" +
    key +
    "&count=" +
    10;

  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => parsingData(data))
    .then((data) => dispatch(fetchSuccsess(data)))
    .catch((err) => dispatch(fetchFailed(err)));
}