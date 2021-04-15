import styled from "styled-components";

export function Example() {
  return (
    <Styled>
      <h1>Anatomy of a Style Rule</h1>
      <p>Check out the <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started">getting started article</a> on MDN</p>
    </Styled>
  );
}

const Styled = styled.div`
  p {
    color: black;
  }

  /*  */

  /*   
1. Rule - collection of declarations
2. Selector - target specific elements on the page
3. Decleration
4. Property
5. Value */
`;

export default Example;
