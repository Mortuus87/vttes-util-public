import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import ObjectContext from "../../../context/ObjectContext";
import axios from "axios";
import { BASE_URL, CHARACTER_PATH } from "../../../constants/api";

export default function SaveFromContext({ label }) {
  const [obj] = useContext(ObjectContext);
  const [auth] = useContext(AuthContext);

  async function saveToDb() {
    const postData = {
      title: obj.character.name,
      character_id: obj.character.oldId,
      json: JSON.stringify(obj),
      status: 'publish',
    };

    axios.post(BASE_URL + CHARACTER_PATH, postData, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.token}`
      }
    })
    .then((res) => {
        // console.log(res);
        window.location.reload();
    })
    .catch((err) => {
        console.log(err)
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    saveToDb();
  }

  return (
    <form className="button-form" onSubmit={handleSubmit}>
      <input type="submit" value={label} />
    </form>
  )
}