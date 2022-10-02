import { useContext } from "react";
import ObjectContext from "../../context/ObjectContext";
import { Table } from "react-bootstrap";

/**
 * Ideally this should be easier to access, but as the identifying property
 * is a sibling of the value some creativity is needed.
 *
 * Could probably be solved with an array map of some sort too.
 *
 * @param {*} character
 * @param {*} attribute
 * @returns string
 */
 export function getAttributeValue(character, attribute) {
  try {
    for (const attrib of character.attribs) {
      if (attrib.name === attribute) {
        return attrib.current;
      }
    }
  } catch (error) {
    console.log(error);
    return '';
  }
}

/**
 * Set the 'object'´s 'attribute' to be 'value'
 *
 * @param {array} obj
 * @param {string} attribute
 * @param {string} value
 */
export function setAttributeValue(obj, attribute, value) {
  try {
    for (const attrib of obj.character.attribs) {
      if (attrib.name === attribute) {
        console.log(`setting ${attribute} to be ${value}`);
        attrib.current = value;
        return obj;
      }
    }

    obj.character.attribs.push({name: attribute, current: value});
    return obj;

  } catch (error) {
    console.log(error);
  }
}

export function getSchema(obj) {
  try {
    for (const attribute of obj.character.attribs) {
      // Schema probably "Pathinder_Neceros v1.81"
      if (attribute.name === 'character_sheet') {
        return attribute.current;
      }
    }
  } catch (error) {
    return '';
  }
}

export function TableInputs({ attributes, label = "" }) {
  return (
    <>
      <h3>{label}</h3>
      <Table>
        <tbody>
          {attributes.map(attribute => {
            return (
            <tr key={attribute.name}>
              <th><span>{attribute.label}</span></th>
              <td>
                <InlineEdit attribute={attribute} />
              </td>
            </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

export function InlineEdit({ attribute }) {
  const [obj, setObj] = useContext(ObjectContext);
  const handleChange = (e) => {
    const attrib = e.target.getAttribute('data-attrib-name');
    const value = e.target.value;
    setObj(setAttributeValue(obj, attrib, value));
  }
  const value = getAttributeValue(obj.character, attribute.name) ?? attribute.default;
  const disabled = attribute.readonly ?? false;

  return (
    <div className={"text-input-wrapper" + (disabled ? " disabled" : "")} >
      <input
        disabled={disabled}
        data-attrib-name={attribute.name}
        aria-label={attribute.name}
        onChange={handleChange}
        type="text"
        defaultValue={value}
        className="text-input"
      />
      <span className="edit-indicator">Edit</span>
    </div>
  )
}



