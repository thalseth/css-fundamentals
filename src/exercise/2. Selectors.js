/* eslint-disable jsx-a11y/anchor-is-valid */
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
        <button className="button">Hover over me!</button>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  /* TODO: Give the paragraph a unique color and font size */

  /* TODO: Add a new class selector with custom style */

  /* Combinators */
  /* TODO: Add custom anchor style to the links inside nav */

  /* Direct child */
  /* TODO: Add dotted border to list items*/

  /* Pseudo-classes */
  /* Task: Create a selector for a custom button with default red color and blue color when it is hovered*/
  /* Bonus: Add a 4px large black border to the button when it is focused */
`;

export default Example;
