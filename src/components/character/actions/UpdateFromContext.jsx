import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import ObjectContext from "../../../context/ObjectContext";
import axios from "axios";
import { BASE_URL, CHARACTER_PATH } from "../../../constants/api";
import { useNavigate } from "react-router-dom";
import { HOMEPAGE_PATH } from "../../../constants/site";

export default function UpdateFromContext({ id }) {
  const [obj] = useContext(ObjectContext);
  const [auth] = useContext(AuthContext);
  const navigate = useNavigate();

  // if it already exits, update instead of add
  // Any natural unique identifiers to check against? maybe "oldId"?
  // does this id need to be in the format it is by default? can it be a UUID of sorts?

  async function updateToDb() {
    const postData = {
      title: obj.character.name,
      character_id: obj.character.oldId,
      json: JSON.stringify(obj),
      status: 'publish',
    };

    axios.post(BASE_URL + CHARACTER_PATH + '/' + id, postData, {
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
    updateToDb();
        navigate(HOMEPAGE_PATH + "/character");
  }

  return (
    <form className="button-form" onSubmit={handleSubmit}>
      <input type="submit" value="Update" />
    </form>
  )
}