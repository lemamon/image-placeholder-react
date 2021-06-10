import styled from "styled-components";

const Container = styled.div<{ isReady: boolean; bgImage: string }>`
  background: ${(props: any) =>
    props.isReady ? "transparent" : `url(${props.bgImage})`};
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
`;

export default Container;
