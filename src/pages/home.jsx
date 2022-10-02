import Heading from "../components/layout/Heading";
// import { CharacterFull } from "../components/character/CharacterFull";
import Container from "react-bootstrap/Container";

export default function HomePage() {
	return (
    <main className="page--home">
      <Container>
        <section>
          <Heading title="Welcome to the VTTES utility tool"/>
          <h2>What is this?</h2>
          <p>The VTTES utility tool, or vttes-util, is a gallery and rudementary editor of characters exported from the virtual tabletop application using the VTTES (virtual tabletop enhancement suite) extension. </p>
          <h2>Why is it?</h2>
          <p>Simply put: to import, edit, collect, and export player character data. To aid in the collabirative management of multiple characters, and giving a brief summary of their characteristics.</p>

          <h2>So how do I use it?</h2>
          <p>Out of the box, vttes-util allows for viewing and editing of characters. These can be imported from a compatible json file, or loaded from the gallery. Finally the loaded file can be exported, keeping any edits.</p>
          <p>By logging in, the full set of actions will be available. It will allow for saving changes directly to the gallery. This can be either as an update to the currently loaded character, or as a new upload.</p>

          <h2>FAQ</h2>
          <dt>What game systems does the app support</dt>
          <dd>Any json formatted exported from roll20 may be uploaded, and can be saved, but only the Pathfinder game system using the "Pathinder_Neceros v1.81" character sheet is initially supported.</dd>
        </section>
      </Container>
    </main>
  );
}