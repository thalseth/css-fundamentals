/* eslint-disable no-unused-vars */
import "./App.css";
import Anatomy from "./exercise/1. Anatomy of a Style Rule/html";
import Selectors from "./exercise/2. Selectors/html";
import Units from "./exercise/3. Units/html";
// import { Router, Link } from "@reach/router";

function App() {
  return (
    <div>
      <h1>CSS Fundamentals</h1>
      <ol>
        <li>
          Anatomy of a Style Rule
          {/* <Link to="anatomy">Anatomy of a Style Rule</Link> */}
        </li>
        <li>
          {/* <Link to="selectors">Selectors</Link> */}
          Selectors
        </li>
        <li>Units</li>
        <li>Media Queries</li>
        <li>Typography</li>
        <li>Debugging in the Browser</li>
        <li>Tips and tricks</li>
      </ol>
      {/* <Router> */}
      {/* <Anatomy */}
      {/* <Selectors /> */}
      <Units />
      {/* </Router> */}
    </div>
  );
}

export default App;
