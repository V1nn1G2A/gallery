import "./listPhoto.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { parsingData } from "../../../store/action/parsingData";
import { fetchFailed, fetchSuccsess } from "../../../store/reducer/dataSlice";
import { RingLoader } from "react-spinners";
import ListItem from "./listItem/ListItem";
import { GET_POSTS } from "../../../apollo/query/get_POSTS";
import { useMutation, useQuery } from "@apollo/client";

const ListPhoto = () => {
  const dispatch = useDispatch();
  async function fetchData() {
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
  const data = useSelector((state) => state.data.data);

  /*const bdQuery = () => {
    const { loading, error, data } = useQuery(GET_POSTS);
    if (loading) return console.log(loading);
    if (error) return console.log(error);
    console.log(data.posts);
    dispatch(fetchSuccsess(data.posts));
  };*/

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="listPhoto">
      {data.loading ? (
        <RingLoader
          className="loader"
          size={100}
          color={"#123abc"}
          loading={true}
          speedMultiplier={1.5}
        />
      ) : (
        <ul className="listPhoto">
          {data.map((item, i) => (
            <ListItem props={item} key={i} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListPhoto;
