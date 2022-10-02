import ObjectContext from "../../../context/ObjectContext";
import { useContext } from "react";

export default function Export() {
  const [obj] = useContext(ObjectContext);
  const defaultName = obj.character.name;


  function saveToFile(name = defaultName) {
    var FileSaver = require('file-saver');
    var blob = new Blob([JSON.stringify(obj, null, 2)], {type: "text/json;charset=utf-8"});
    FileSaver.saveAs(blob, name+'.json');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    saveToFile()
  }

  return (
    <form className="button-form" onSubmit={handleSubmit}>
      <input type="submit" value="Export" />
    </form>
  );
}