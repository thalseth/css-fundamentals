/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.css";

export function Example() {
  return (
    <>
      <h1>Typography</h1>

      <div className="card">
        <p>I want to be a sheriff</p>
      </div>

      <div className="card">
        <p className="custom-font">I want to be special</p>
      </div>

      <div className="card">
        <p className="custom-font bold">bold</p>
        <p className="custom-font italic">italic</p>
        <p className="custom-font underline">underline</p>
      </div>

      <div className="card">
        <p className="custom-font left">left</p>
        <p className="custom-font center">center</p>
        <p className="custom-font right">right</p>
      </div>

      <div className="card">
        <p className="custom-font uppercase">uppercase</p>
        <p className="custom-font capitalize">capitalize</p>
      </div>
    </>
  );
}

export default Example;
