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
  /* TODO: Specify font-family on paragraph (p) element */

  /* TODO: Add a custom font from google fonts */
  /* 🐨 You can import a new font into /public/index.html or use the existing font "Roboto" */
  /* 🐨 A .custom-font selector is attached to paragraphs above */

  /* TODO: Add text formatting (font-weight, font-style and text-decoration. */
  /* 🐨 You can user existing selectors to add these styles (.bold, .italic and .underline). */

  /* TODO: Align text using text-align declaration*/
  /* 🐨 You can user existing selectors to add these styles (.left, .center and .right). */

  /* TODO: Transform text using text-transform decleration*/
  /* 🐨 You can user existing selectors to add these styles (.uppercase and .capitalize). */
`;

export default Example;
