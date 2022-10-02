import { useContext } from "react";
import ObjectContext from "../../context/ObjectContext";
import avatar from "../../res/img/portrait.png";
import token from "../../res/img/token.png";


export function getCharacterTokenUrl(character) {
  try {
    const tokenObj = JSON.parse(character.defaulttoken);
    // console.log(tokenObj.imgsrc);
    return tokenObj.imgsrc.length ? tokenObj.imgsrc : token;
  } catch (error) {
    console.log('found no token');
  }

  // try {
  //   // console.log(character.avatar);
  //   return character.avatar.length ? character.avatar : token;
  // } catch (error) {
  //   console.log('found no avatar');
  // }

  return token;
}

export function getCharacterImageUrl(character) {
  const url = character.avatar;
  if (url) {
    return url;
  }

  return avatar;
}

export function EditProperty({property, label = ""}) {
  const [obj, setObj] = useContext(ObjectContext);
  const handlePropertyChange = (e) => {
    obj.character[property] = e.target.value;
    setObj(obj);
  }
  return (
    <div className="text-input-wrapper">
      <label>
        <h3>{label}</h3>
        <input
          data-attrib-name={property}
          aria-label={property}
          onChange={handlePropertyChange}
          type="text"
          defaultValue={obj.character[property]}
          className="text-input"
        />
      </label>
    </div>
  )
}

export function EditToken({label = ''}) {
  const [obj, setObj] = useContext(ObjectContext);

  let token = [];
  let defaultValue = '';
  // console.log(obj.character.defaulttoken);
  try {
    token = JSON.parse(obj.character.defaulttoken);
  } catch (error) {
    console.log("could not parse the token json into array");
    token['imgsrc'] = '';
  } finally {
    defaultValue = token.imgsrc;
    // console.log(token.imgsrc);
  }


  const handlePropertyChange = (e) => {
    const incomingValue = e.target.value;
    try {
      token.imgsrc = incomingValue;
    } catch (error) {
      token['imgsrc'] = incomingValue
    } finally {
      obj.character.defaulttoken = JSON.stringify(token);
      setObj(obj);
      return;
    }
  }

  return (
    <div className="text-input-wrapper flex-grow-1">
      <label>
        <h3>{label}</h3>
        <input
          data-attrib-name="token"
          aria-label="token"
          onChange={handlePropertyChange}
          type="text"
          defaultValue={defaultValue}
          className="text-input"
        />
      </label>
    </div>
  )
}