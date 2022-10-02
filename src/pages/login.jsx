import Heading from "../components/layout/Heading";
import LoginForm from "../components/form/LoginForm";
import Container from "react-bootstrap/Container";

export default function LoginPage() {
  return (
    <main className="page--login">
      <Container>
        <section>
          <Heading title="Login" />
          <LoginForm />
        </section>
      </Container>
    </main>
  );
}