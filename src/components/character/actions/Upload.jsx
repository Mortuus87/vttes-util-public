import React, { useContext } from "react";
import ObjectContext from "../../../context/ObjectContext";

export function Upload() {
  const [,setObj] = useContext(ObjectContext)

  const handleChange = file => {
    const fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");
    fileReader.onload = file => {
      try {
        setObj(JSON.parse(file.target.result));
      } catch (error) {
        console.log(error);
        setObj({});
      } finally {
        window.location.reload();
      }
    };
  };

  return (
    <div className="file-input d-flex">
      <input id="file" type="file" className="file" onChange={e => handleChange(e.target.files[0])} accept='.json,.vttes_component_bundle'/>
      <label htmlFor="file">Import</label>
    </div>
  );
}