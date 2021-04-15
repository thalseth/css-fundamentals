import styled from "styled-components";

export function Example() {
  return (
    <Styled>
      <h1>Anatomy of the Style Rule</h1>
      <p>TODO: Add exercise</p>
    </Styled>
  );
}

const Styled = styled.div`
  p {
    color: black;
    font-size: 2rem;
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
