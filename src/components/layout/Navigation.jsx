import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { HOMEPAGE_PATH } from "../../constants/site";
import { Container, Navbar } from "react-bootstrap";
import NavLink from "react-bootstrap/NavLink";
import { confirm } from "react-confirm-box";

function Navigation() {
  const [auth, setAuth] = useContext(AuthContext);

  // const history = useHistory();

  const logout = async () => {
    const answer = await confirm('Are you sure you want to log out')
    if (answer) {
      setAuth(null);
      return;
    };
  }

  function getClasses(href) {
    const pathname = window.location.pathname;
    return (pathname === href) ? 'active' : '';
  }

  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <NavLink className={getClasses(HOMEPAGE_PATH + '/')} href={HOMEPAGE_PATH + "/"}>Home</NavLink >
        <NavLink className={getClasses(HOMEPAGE_PATH + '/character')} href={HOMEPAGE_PATH + "/character"}>Character</NavLink >
        <NavLink className={getClasses(HOMEPAGE_PATH + '/gallery')} href={HOMEPAGE_PATH + "/gallery"}>Gallery</NavLink >
        {auth ? (
          <NavLink onClick={logout}>Log out</NavLink>
        ) : (
          <NavLink href={HOMEPAGE_PATH + "/login"}>Login</NavLink >
        )}
      </Container>
    </Navbar>
  );
}

export default Navigation;