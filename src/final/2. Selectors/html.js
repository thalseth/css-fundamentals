/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.css";

export function Example() {
  return (
    <>
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
    </>
  );
}

export default Example;
