import React, { useContext } from "react";
import ObjectContext from "../../context/ObjectContext";
import { getCharacterTokenUrl } from "./Properties";

/**
 * A short display of a token and the character name.
 */
export function CharacterSummary() {
  const [obj] = useContext(ObjectContext);
  try {
    return (
      <div className="character--summary">
        <div className="character--summary--token">
          <img src={getCharacterTokenUrl(obj.character)} alt="character" />
        </div>
        <div className="character--summary--name">
          <h2>{obj.character.name}</h2>
        </div>
      </div>
    )
  } catch (error) {
    return (<div>Nothing to display</div>);
  }
}