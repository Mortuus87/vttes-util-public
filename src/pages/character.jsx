import Heading from "../components/layout/Heading";
import { CharacterFull } from "../components/character/CharacterFull";
import Container from "react-bootstrap/Container";
import { CurrentLoadedBar } from "../components/character/CurrentLoadedBar";

export default function CharacterPage() {
	return (
    <main  className="page--character">
    <CurrentLoadedBar />
    <Container>
      <section>
        <CharacterFull/>
      </section>
    </Container>
    </main>
  );
}