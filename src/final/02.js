/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";

export function Example() {
  return (
    <Styled>
      <h1>Units</h1>

      <div className="card">
        <h2>Px</h2>
        <div className="box-px" />
      </div>
      <div className="card">
        <h2>Ems</h2>
        <div className="box-em">
          <div className="box-em-child" />
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
        <div className="box-percentage">
          <div className="box-percentage-child" />
        </div>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  /* Task: Create a box with px values */

  .box-px {
    width: 50px;
    height: 50px;
    padding: 8px;
    background-color: orange;
  }

  /* TASK: Create a box with font-size and a child box with dimentions using em unit */

  .box-em {
    font-size: 100px;
  }

  .box-em-child {
    width: 0.5em;
    height: 0.5em;
    background: orange;
  }

  /* .box-em h3 {
  font-size: 24px;
  margin-bottom: 2em;
} */

  /* TASK: create article using rems */

  html {
    /* Overriding user setting */
    font-size: 24px;
  }

  .article h1 {
    font-size: 2rem;
    margin: 0;
  }

  .article h2 {
    font-size: 1.25rem;
    margin: 0;
    color: gray;
  }

  .article p {
    font-size: 1rem;
  }

  /* TASK: Create a box selector with custom dimentions and a child with percentagages */

  .box-percentage {
    width: 250px;
    height: 250px;
    background-color: pink;
  }

  .box-percentage-child {
    width: 50%;
    height: 75%;
    background-color: black;
  }
`;

export default Example;
