import { Card, Col } from "react-bootstrap";
import ObjectContext from "../../context/ObjectContext";
import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { getCharacterTokenUrl } from "./Properties";
import { HOMEPAGE_PATH } from "../../constants/site";

import Load from "./../character/actions/Load";
import Update from "./../character/actions/UpdateFromContext";
import Delete from "./../character/actions/Delete";

export function CharacterCard({ data = {} }) {
  const [auth] = useContext(AuthContext);
  const [obj] = useContext(ObjectContext);

  const postObj = JSON.parse(data.json);
  const character = postObj.character;
  let sameCharacter = false;

  try {
    if (character.oldId === obj.character.oldId && obj.character.oldId.length) {
      sameCharacter = true;
    }
  } catch (error) {
    // console.log(error);
  }

  try {
    return (
      <Col sm={6} md={4} className="mb-3">
        <Card className="character--card">
          <div className="card-header">
            <figure className="token">
              <img src={getCharacterTokenUrl(character)} alt="character" />
            </figure>
          </div>
          <div className="card-body">
            <h2>{character.name}</h2>
          </div>
          <div className="card-footer">
            {sameCharacter && auth ? (
              <>
                <div className="d-inline-flex">
                  <a className="btn btn-primary" href={HOMEPAGE_PATH + "/character"}>Edit</a>
                </div>
                <Update id={data.id}/>
              </>
            ) : (
              <>
              <Load data={data}/>
              </>
            )}

            {auth ? (
              <Delete id={data.id} />
            ) : (
              <></>
            )}
          </div>
        </Card>
      </Col>
    );
  } catch (error) {
    console.log(error);
  }
}