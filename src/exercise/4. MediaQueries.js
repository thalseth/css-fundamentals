import styled from "styled-components";
export function Example() {
  return (
    <Styled>
      <h1>Media Queries</h1>

      <div className="card">
        <h2>Change text color</h2>
        <p>Change my color</p>
      </div>

      <div className="card">
        <h2>Change / hide content using a utility class</h2>
        <p className="mobile-only">Show me on mobile!</p>
        <p className="desktop-only">Show me on desktop!</p>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  /* TODO: Change color from red to blue on larger screens */
  /* TODO: Create a new class selector to swap content using display: none; decleration for mobile and desktop */
`;

export default Example;
