import ObjectContext from "../../../context/ObjectContext";
import { useContext } from "react";
import { confirm } from "react-confirm-box";

export default function Clear() {
  const [,setObj] = useContext(ObjectContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answer = await confirm('Are you sure you want to discard the character?')
    if (answer) {
      setObj({})
      return;
    };
  }

  return (
    <form className="button-form" onSubmit={handleSubmit}>
      <input className="btn-warning" type="submit" value="Clear" />
    </form>
  );
}