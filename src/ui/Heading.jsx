import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-weight: 600;
      font-size: 30px;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-weight: 600;
      font-size: 15px;
    `}
`;

export default Heading;
