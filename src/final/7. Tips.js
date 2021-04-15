/* eslint-disable jsx-a11y/anchor-is-valid */
// import "./style.css";

export function Example() {
  return (
    <>
      <h1>Tips and tricks</h1>
      <div className="card">
        <h2>Selectors</h2>
        <ul>
          <li>Don't use ID's for style.</li>
          <li>
            Avoid over-qualified selectors: <code>h1.page-title</code>,{" "}
            <code>div &gt; .page-title</code>
          </li>
          <li>
            Use meaningful names: <code>$visual-grid-color</code> not{" "}
            <code>$color</code> or <code>$vslgrd-clr</code>.
          </li>
          <li>
            Be consistent about naming conventions for classes. For instance, if
            a project is using BEM, continue using it.
          </li>
          <li>
            Use class names that are as short as possible but as long as
            necessary.
          </li>
          <li>Avoid nesting more than 3 selectors deep.</li>
          <li>Avoid nesting within a media query.</li>
        </ul>
      </div>
      <div className="card">
        <h2>Order</h2>
        <ul>
          <li>Use alphabetical order for declarations.</li>
          <li>
            Place <code>@extends</code> and <code>@includes</code> at the top of
            your declaration list.
          </li>
          <li>Place media queries directly after the declaration list.</li>
          <li>Place concatenated selectors second.</li>
          <li>Place pseudo-states and pseudo-elements third.</li>
          <li>Place nested elements fourth.</li>
          <li>Place nested classes fifth.</li>
        </ul>
      </div>
      <div className="card">
        <h2>Formatting</h2>
        <ul>
          <li>
            Use one space between property and value: <code>width: 20px</code>{" "}
            not <code>width:20px</code>.
          </li>
          <li>Use a blank line above a selector that has styles.</li>
          <li>
            Use one space between selector and <code>{`{`}</code>.
          </li>
          <li>Use double quotation marks.</li>
          <li>Use only lowercase, except for string values.</li>
          <li>
            Use a leading zero in decimal numbers: <code>0.5</code> not{" "}
            <code>.5</code>
          </li>
        </ul>
      </div>
      <div className="card">
        <h2>Creating a component</h2>
        <p>A Component should be self contained and isolated</p>
        <ul>
          <li>
            {" "}
            Properties that should be avoided on component level
            <ul>
              <li>
                <code>float</code>, <code>position</code>, <code>width</code>,{" "}
                <code>height</code>, <code>margin</code>, <code>z-index</code>.{" "}
                <code>position: relative;</code> is an exception because the
                value do not effect layout outside the block
              </li>
            </ul>
          </li>
          <li>
            Don´t use margin top because it might cause boom{" "}
            <a
              href="https://css-tricks.com/what-you-should-know-about-collapsing-margins/"
              target="_blank"
              rel="noreferrer"
            >
              margins to collapse
            </a>
            .
          </li>
        </ul>
      </div>
    </>
  );
}

export default Example;
