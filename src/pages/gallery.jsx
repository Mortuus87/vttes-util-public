import Heading from "../components/layout/Heading";
import Container from "react-bootstrap/Container";
import Gallery from "../components/character/Gallery";
import { CurrentLoadedBar } from "../components/character/CurrentLoadedBar";

export default function GalleryPage() {
	return (
    <main className="page--gallery">
      <CurrentLoadedBar />
      <Container>
        <section>
          <Heading title="Gallery" />
          <Gallery/>
        </section>
      </Container>
    </main>
  );
}