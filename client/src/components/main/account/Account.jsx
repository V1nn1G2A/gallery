import { useSelector } from 'react-redux';

const Account = () => {
  const data = useSelector((state) => state.data.data)
  const userId = window.location.search.substring(4);
  const dataUser = data.find((user) => user.id === userId);

  console.log(data);
  console.log(userId);

  return (
    <div className="account">
      <img src="" alt="user_avatar" className="account_avatar" />
      <h2 className="account_username">{}</h2>
      <span className="account_name">{}</span>
      <span className="likes">{}</span>
    </div>
  )
}

export default Account