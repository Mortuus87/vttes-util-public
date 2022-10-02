import Heading from "../layout/Heading";
import { useContext } from "react";
import ObjectContext from "../../context/ObjectContext";
import { ATTRIB_SCHEMA } from "../../constants/attribSchema";
import { TableInputs } from "./Attributes";
import { EditProperty, EditToken, getCharacterImageUrl } from "./Properties";
import { getCharacterTokenUrl } from "./Properties";
import New from "./actions/New";

import { Row, Col } from "react-bootstrap";

/**
 *
 */
export function CharacterFull() {
  const [obj] = useContext(ObjectContext);

  try {
    return (
      <>
        <Row className="character--full">
          <Col>
            <Heading title="Character"/>
            <Row>
              <Col className="mb-2" sm={6} lg={4}>
                <figure className="character--full--portrait">
                  <img src={getCharacterImageUrl(obj.character)} alt="character" />
                </figure>
              </Col>
              <Col className="mb-2" sm={6} lg={4}>
                <div className="character--full--properties">
                  <EditProperty label="Name" property={"name"}/>
                  <EditProperty label="Portrait" property={"avatar"}/>
                  <div className="d-flex">
                    <EditToken label="Token" className="flex-grow-1"/>
                    <div className="character--full--properties--token">
                      <img src={getCharacterTokenUrl(obj.character)} alt="character" />
                    </div>
                  </div>
                  <div className="mt-auto">
                    <input className="btn btn-primary mx-0 mb-0 mt-auto" type="button" value="View changes" onClick={() => {window.location.reload()}}/>
                  </div>
                </div>
              </Col>
              <Col className="mb-2" lg={4}>
                <TableInputs attributes={ATTRIB_SCHEMA.info}/>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="ability-scores">
              <Row>
                <Col className="mb-2" sm={6}>
                  <TableInputs label="Ability scores" attributes={ATTRIB_SCHEMA.abilities}/>
                </Col>
                <Col className="mb-2" sm={6}>
                  <TableInputs label="Attributes" attributes={ATTRIB_SCHEMA.general}/>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </>
    )
  } catch (error) {
    return (
      <Row>
        <Col>
          <div className="text-center">
            <New/>
          </div>
        </Col>
      </Row>
    );
  }
}