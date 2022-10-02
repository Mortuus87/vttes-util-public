import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import ObjectContext from "../../context/ObjectContext";
import { HOMEPAGE_PATH } from "../../constants/site";

import { CharacterSummary } from "./CharacterSummary";
import Clear from "./actions/Clear";
import Export from "./actions/Export";
import Post from "./actions/PostFromContext";
import New from "./actions/New";

import { Upload as Import } from "./actions/Upload";
import { Container, Row, Col } from "react-bootstrap";

export function CurrentLoadedBar() {
  const [obj] = useContext(ObjectContext)
  const [auth] = useContext(AuthContext);
  try {
    switch (obj.type) {
      case "character":
        return (
          <div className="character--loaded-bar">
            <Container fluid>
              <Row className="">
                <Col md={6}>
                  <div className="character--loaded-bar--info">
                    <a href={HOMEPAGE_PATH + "/character"}>
                      <CharacterSummary obj={obj}/>
                    </a>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="character--interface">
                    <div className="character--interface--group">
                      {auth ? <Post label={'Save to gallery'}/> : <></>}
                      <Clear />
                    </div>
                    <div className="character--interface--group">
                      <Import />
                      <Export />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        );
      default:
        return (
            <div className="character--loaded-bar">
            <Container fluid>
              <Row className="">
                <Col >
                  <div className="character--interface">
                    <div className="character--interface--group">
                      <div className="d-flex">
                        <a className="btn btn-primary" href={HOMEPAGE_PATH + "/gallery"}>View gallery</a>
                      </div>
                    </div>
                    <div className="character--interface--group">
                      <Import />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            </div>
        )
    }
  } catch (error) {
    console.log('nothing currently active');
    return (
      <div className="character--loaded-bar">
      <Container fluid>
        <Row className="">
          <Col md={6}>
          </Col>
          <Col md={6}>
            <div className="character--interface">
              <div className="">
                {/* <New/> */}
                <Import />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    )
  }
}
