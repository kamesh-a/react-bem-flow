import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: ${(p) => p.background};
  background-size: 50px 50px;
  display: flex;

  > * {
    height: 100%;
    min-height: 100%;
    width: 100%;
  }

  background-image: linear-gradient(
      0deg,
      transparent 24%,
      ${(p) => p.color} 25%,
      ${(p) => p.color} 26%,
      transparent 27%,
      transparent 74%,
      ${(p) => p.color} 75%,
      ${(p) => p.color} 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      ${(p) => p.color} 25%,
      ${(p) => p.color} 26%,
      transparent 27%,
      transparent 74%,
      ${(p) => p.color} 75%,
      ${(p) => p.color} 76%,
      transparent 77%,
      transparent
    );
`;

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }
`;

export class DemoCanvasWidget extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle/>
          <Container
            background={this.props.background || "rgba(14,13,13,0.11)"}
            color={this.props.color || "#352f2f26"}
          >
            {this.props.children}
          </Container>
      </>
    );
  }
}
