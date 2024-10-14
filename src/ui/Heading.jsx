import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      background-color: yellow;
      font-weight: 600;
      font-size: 30px;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      background-color: #00ff37;
      font-weight: 600;
      font-size: 15px;
    `}
`;

export default Heading;
