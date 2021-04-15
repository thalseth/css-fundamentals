/* eslint-disable jsx-a11y/anchor-is-valid */
// import "./style.css";
import styled from "styled-components";

export function Example() {
  return (
    <Styled>
      <h1>Selectors</h1>
      <div className="card">
        <p>Styled using basic html tag as selector</p>
        <p className="apple">Styled using custom class as selector</p>
      </div>

      <div className="card">
        <h2>Descendant combinator</h2>
        <nav>
          <a href="">Home</a> - <a href="">Shop</a>
        </nav>
        <br />
        <p>
          Hello World! You might be interested in reading{" "}
          <a href="">an article</a>!
        </p>
      </div>

      <div className="card">
        <h2>Child combinator (>)</h2>
        {/* TODO: Add a list with a sublist */}
        <ul class="shopping-list">
          <li>Salt</li>
          <li>Pepper</li>
          <li>
            Fruits
            <ul>
              <li>Apple</li>
              <li>Banana</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="card">
        <h2>Pseudo-classes</h2>
        {/* TODO: Add button here and append the new class selector */}
        <button className="button">Hover over me!</button>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  /* TODO: Give the paragraph a unique color and font size */

  p {
    color: blue;
    font-size: 1rem;
  }

  /* TODO: Add a new class selector with custom style */

  .apple {
    color: white;
    padding: 24px;
    background: #ce0303;
  }

  /* Combinators */
  /* TODO: Add custom anchor style to the links inside nav */

  nav a {
    color: red;
    font-weight: bold;
  }

  /* Direct child */
  /* TODO: Add fancy border to list items */
  li {
    margin-bottom: 8px;
  }

  .shopping-list > li {
    border: 2px dotted;
  }

  /* Pseudo-classes */
  /* Task: Create a selector for a custom button with default red color and blue color when it is hovered*/
  .button {
    color: red;
    padding: 18px 12px;
  }
  .button:hover {
    color: blue;
  }
  /* Bonus: Add a 4px large black border to the button when it is focused */
  .button:focus {
    border: 4px solid black;
  }
`;

export default Example;
