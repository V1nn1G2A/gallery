import "./listPhoto.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RingLoader } from "react-spinners";
import ListItem from "./listItem/ListItem";
import { getProducts } from "../../../axios";
import { useEffect } from "react";
import { fetchSuccsess } from "../../../store/reducer/dataSlice";

const ListPhotoBd = () => {
  const dispatch = useDispatch();
  
  async function getBd() {
    const data = await getProducts();
    return data;
  }

  useEffect(() => {
    getBd().then((data) => dispatch(fetchSuccsess(data)));
  }, [dispatch]);

  const data1 = useSelector((state) => state.data.data);

  console.log(data1);

  return (
    <div className="listPhoto">
      {data1 === undefined ? (
        <RingLoader
          className="loader"
          size={100}
          color={"#123abc"}
          loading={true}
          speedMultiplier={1.5}
        />
      ) : (
        <ul className="listPhoto">
          {data1.map((item, i) => (
            <ListItem props={item} key={i} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListPhotoBd;
