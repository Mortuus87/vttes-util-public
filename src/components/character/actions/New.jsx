import { useContext } from "react";
import ObjectContext from "../../../context/ObjectContext";
import json from "../../../res/json/empty.json";

export default function New() {
  const [, setObj] = useContext(ObjectContext);

  function LoadBlankCharacter() {
    console.log('New character!');
    setObj(json);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    LoadBlankCharacter();
    window.location.reload();
  }

  return (
    <form className="button-form mt-5" onSubmit={handleSubmit}>
      <input type="submit" value="Generate new" />
    </form>
  );
}