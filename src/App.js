import { Router, Link } from "@reach/router";
import "./App.css";
import Intro from "./Intro";
import Anatomy from "./final/1. Anatomy";
import Selectors from "./final/2. Selectors";
import Units from "./final/3. Units";
import MediaQueries from "./final/4. MediaQueries";
import Typography from "./final/5. Typography";
import Debugging from "./final/6. Debugging";
import Tips from "./final/7. Tips";

function App() {
  return (
    <div className="container">
      <nav>
        <ol>
          <li>
            <Link to="/">Intro</Link>
          </li>
          <li>
            <Link to="/anatomy">Anatomy</Link>
          </li>
          <li>
            <Link to="/selectors">Selectors</Link>
          </li>
          <li>
            <Link to="/units">Units</Link>
          </li>
          <li>
            <Link to="/media-queries">Media queries</Link>
          </li>
          <li>
            <Link to="/typography">Typography</Link>
          </li>
          <li>
            <Link to="/debugging">Debugging</Link>
          </li>
          <li>
            <Link to="/tips">Tips</Link>
          </li>
        </ol>
      </nav>
      <Router>
        <Intro path="/" />
        <Anatomy path="/anatomy" />
        <Selectors path="/selectors" />
        <Units path="/units" />
        <MediaQueries path="/media-queries" />
        <Typography path="/typography" />
        <Debugging path="/debugging" />
        <Tips path="/tips" />
      </Router>
    </div>
  );
}

export default App;
