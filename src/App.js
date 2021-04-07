/* eslint-disable no-unused-vars */
import "./App.css";
import Anatomy from "./exercise/1. Anatomy of a Style Rule/html";
import Selectors from "./exercise/2. Selectors/html";
import Units from "./exercise/3. Units/html";
import MediaQueries from "./exercise/4. Media Queries/html";
import Typography from "./exercise/5. Typography/html";

function App() {
  return (
    <div>
      <h1>CSS Fundamentals</h1>
      <ol>
        <li>Anatomy of a Style Rule</li>
        <li>Selectors</li>
        <li>Units</li>
        <li>Media Queries</li>
        <li>Typography</li>
        <li>Debugging in the Browser</li>
        <li>Tips and tricks</li>
      </ol>
      {/* <Anatomy /> */}
      {/* <Selectors/> */}
      {/* <Units /> */}
      {/* <MediaQueries /> */}
      <Typography />
    </div>
  );
}

export default App;
