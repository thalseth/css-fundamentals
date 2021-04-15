import { Router, Link } from "@reach/router";
import styled from 'styled-components';
import "./App.css";
import Intro from "./Intro";
import Anatomy from "./doc/Anatomy";
import Debugging from "./doc/Debugging";
import Tips from "./doc/Tips";
import Selectors from "./exercise/01";
import Units from "./exercise/02";
import MediaQueries from "./exercise/03";
import Typography from "./exercise/04";
import SelectorsFinal from "./final/01";
import UnitsFinal from "./final/02";
import MediaQueriesFinal from "./final/03";
import TypographyFinal from "./final/04";

const Navigation = styled.nav`
  grid-area: navigation;
  padding: 48px 48px 40px 16px;
  color: #fff;
  
  a {
    color: #fff;
  }

  p {
    margin-bottom: 6px;
  }

  ul, ol {
    margin-top: 0;
  }
`;

const NavigationContent = styled.div`
  position: sticky;
  top: 16px;
`;

const Main = styled.main`
  grid-area: article;
  max-width: 960px;
  padding: 64px;
  margin-top: 48px;
  margin-bottom: 48px;
  margin-right: 16px;
  border-radius: 8px;
  background-color: #fff;
`;

const Layout = styled.div`
  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-areas: "navigation article";
  }
`;

function App() {
  return (
    <Layout>
      <Navigation>
      <NavigationContent>
        <Link to="/">Intro</Link>
        <p>Documentation</p>
        <ul>
            <li>
              <Link to="/documentation/anatomy">Anatomy</Link>
            </li>
            <li>
              <Link to="/documentation/debugging">Debugging</Link>
            </li>
            <li>
              <Link to="/documentation/tips">Tips</Link>
            </li>
        </ul>
        <p>Exercise</p>
        <ol>
            <li>
              <Link to="/exercise/selectors">Selectors</Link>
            </li>
            <li>
              <Link to="/exercise/units">Units</Link>
            </li>
            <li>
              <Link to="/exercise/media-queries">Media queries</Link>
            </li>
            <li>
              <Link to="/exercise/typography">Typography</Link>
            </li>
          </ol>
          <p>Final</p>
        <ol>
            <li>
              <Link to="/final/selectors">Selectors</Link>
            </li>
            <li>
              <Link to="/final/units">Units</Link>
            </li>
            <li>
              <Link to="/final/media-queries">Media queries</Link>
            </li>
            <li>
              <Link to="/final/typography">Typography</Link>
            </li>
          </ol>
      </NavigationContent>
      </Navigation>
      <Main>
        <Router>
          <Intro path="/" />

          <Selectors path="/exercise/selectors" />
          <Units path="/exercise/units" />
          <MediaQueries path="/exercise/media-queries" />
          <Typography path="/exercise/typography" />

          <SelectorsFinal path="/final/selectors" />
          <UnitsFinal path="/final/units" />
          <MediaQueriesFinal path="/final/media-queries" />
          <TypographyFinal path="/final/typography" />

          <Anatomy path="/documentation/anatomy" />
          <Tips path="/documentation/tips" />
          <Debugging path="/documentation/debugging" />
        </Router>
      </Main>
    </Layout>
  );
}

export default App;
