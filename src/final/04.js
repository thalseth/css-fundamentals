/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";

export function Example() {
  return (
    <Styled>
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
    </Styled>
  );
}

const Styled = styled.div`
  /* TODO: Specify font-family*/
  p {
    font-family: serif;
    font-size: 3rem;
  }

  /* TODO: Add a custom font from google fonts*/
  .custom-font {
    font-family: "Roboto";
  }

  /* TODO: Add text formatting*/
  .custom-font.bold {
    font-weight: 700;
  }

  .custom-font.italic {
    font-style: italic;
  }

  .custom-font.underline {
    /* font-style: underline; */
    text-decoration: underline;
  }

  /* TODO: Align text using text-align declaration*/
  .custom-font.left {
    text-align: left;
  }

  .custom-font.center {
    text-align: center;
  }

  .custom-font.right {
    text-align: right;
  }

  /* TODO: Transform text using text-transform decleration*/
  .custom-font.uppercase {
    text-transform: uppercase;
  }

  .custom-font.capitalize {
    text-transform: capitalize;
  }
`;

export default Example;
