import "./listItem.css";

const ListItem = ({ props }) => {
  return (
    <li className="listItem">
      <div className="listItem_user user">
        <img src={props.user_img} alt="" className="user_img" />
        <a href={"#"} className="user_name">{props.user_name}</a>
      </div>
      <img src={props.urls} alt={props.alt_description} className="listItem_img" />
      <span className="listItem_description">{props.description}</span>
    </li>
  );
};

export default ListItem;
