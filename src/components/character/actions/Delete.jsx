import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import axios from "axios";
import { BASE_URL, CHARACTER_PATH } from "../../../constants/api";
import { confirm } from "react-confirm-box";

export default function Delete({ id }) {
  const [auth] = useContext(AuthContext);

  // if it already exits, update instead of add
  // Any natural unique identifiers to check against? maybe "oldId"?
  // does this id need to be in the format it is by default? can it be a UUID of sorts?

  async function deleteFromDb() {
    axios.delete(BASE_URL + CHARACTER_PATH + '/' + id, {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answer = await confirm('Are you sure you want to delete the character from the gallery?')
    if (answer) {
      deleteFromDb();
      return;
    };

  }

  return (
    <form className="button-form" onSubmit={handleSubmit}>
      <input className="btn-danger" type="submit" value="Delete" />
    </form>
  )
}