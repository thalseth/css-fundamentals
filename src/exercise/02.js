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
  /* TASK: Create a box with px values */
  /* 🐨 A .box-px selector is attached to a div element above. */
  
  /* TASK: Create a box with font-size and a child box with dimentions using em unit */
  /* 🐨 A .box-em & .box-em-child selector is attached to a div element above. */

  /* TASK: Create article using rems and override the base font size defined on html selector to see the changes*/
  /* 🐨 A .article selector is attached to a article element above. */

  html {
    /* Overriding user setting to test dynamic rem values defined in article*/
    font-size: 24px;
  }

  /* TASK: Create a box selector with custom dimentions and a child with percentagages */
  /* 🐨 A .box-percentage & .box-percentage-child selector is attached to a div element above. */
`;

export default Example;
