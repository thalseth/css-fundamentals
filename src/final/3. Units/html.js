/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.css";

export function Example() {
  return (
    <>
      <h1>Units</h1>

      <div className="card">
        <h2>Px</h2>
        <div className="box-px" />
      </div>
      <div className="card">
        <h2>Ems</h2>
        {/* Relative to the font-size */}
        <div className="box-em">
          <div className="box-em-child" />
          {/* <h3>Cool margin</h3> */}
        </div>
      </div>
      <div className="card">
        <h2>Rems</h2>
        <article className="article">
          <h1>What's a staple? The list expands.</h1>
          <h2>Jan. 1, 1991</h2>
          <p>
            Conventional agricultural wisdom holds that only a handful of crop
            species -- as few as 7 and no more than 30, depending on different
            assessments -- account for most of the plant food consumed by
            humanity. But a new study says more than 100 species and possibly as
            many as 200 are important food sources.
          </p>
        </article>
      </div>
      <div className="card">
        <h2>Percentage</h2>
        {/* Create a box with a child element. The child element should use
          percentage width and height of the parent box. */}
        <div className="box-percentage">
          <div className="box-percentage-child" />
        </div>
      </div>
    </>
  );
}

export default Example;
