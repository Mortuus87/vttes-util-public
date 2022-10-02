// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import { AuthProvider } from "./context/AuthContext";
import { ObjectProvider } from "./context/ObjectContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOMEPAGE_PATH } from "./constants/site";

import './App.scss';

import CharacterPage from "./pages/character";
import HomePage from "./pages/home";
import GalleryPage from "./pages/gallery";
import LoginPage from "./pages/login";

function App() {
  return (
    <AuthProvider>
      <ObjectProvider>
        <header id="header">
          <Navigation />
        </header>
        <BrowserRouter>
            <Routes>
              <Route end path={HOMEPAGE_PATH + "/"} element={<HomePage />} />
              <Route path={HOMEPAGE_PATH + "/character"} element={<CharacterPage />} />
              <Route path={HOMEPAGE_PATH + "/gallery"} element={<GalleryPage />}/>
              <Route path={HOMEPAGE_PATH + "/login"} element={<LoginPage />}/>
            </Routes>
        </BrowserRouter>
        <footer id="footer">
          <Footer/>
        </footer>
      </ObjectProvider>
    </AuthProvider>
  );
}

export default App;
