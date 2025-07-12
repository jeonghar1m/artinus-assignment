import styled from "styled-components";

export const Container = styled.div<{ width: string; height: string }>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const Img = styled.img<{ width: string; height: string }>`
  transition: all 0.5s;
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  &.loading {
    filter: blur(10px);
    clip-path: inset(0);
  }
  &.loaded {
    filter: blur(0px);
  }
`;
