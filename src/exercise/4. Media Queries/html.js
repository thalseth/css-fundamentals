/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.css";

export function Example() {
  return (
    <>
      <h1>Media Queries</h1>

      <div className="card">
        <h2>Change text color</h2>
        <p>Change my color</p>
      </div>

      <div className="card">
        <h2>Change / hide content using utility class</h2>
        <p className="mobile-only">Show me on mobile!</p>
        <p className="desktop-only">Show me on desktop!</p>
      </div>
    </>
  );
}

export default Example;
