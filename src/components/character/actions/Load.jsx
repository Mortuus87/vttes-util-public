import ObjectContext from "../../../context/ObjectContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HOMEPAGE_PATH } from "../../../constants/site";

export default function Load({ data }) {
  const [, setObj] = useContext(ObjectContext);
  const navigate = useNavigate();
  const postObj = JSON.parse(data.json);

  const handleSubmit = (e) => {
    e.preventDefault();
    setObj(postObj);
    console.log('loading post to context', data.id);
    navigate(HOMEPAGE_PATH + "/character");
    // For some reason useNavigate won't update the active class in the navigation
    // forcing it with a reload.
    window.location.reload();
  }

  return (
    <form className="button-form" onSubmit={handleSubmit}>
      <input type="submit" value="Load" />
    </form>
  )
}