import styled from "styled-components";
export const ELEVATIONS = {
  small: `
      0.5px 1px 1px hsl(var(--shadow-color) / 0.7)
    `,
  medium: `
      1px 2px 2px hsl(var(--shadow-color) / 0.333),
      2px 4px 4px hsl(var(--shadow-color) / 0.333),
      3px 6px 6px hsl(var(--shadow-color) / 0.333)
    `,
  large: `
      1px 2px 2px hsl(var(--shadow-color) / 0.2),
      2px 4px 4px hsl(var(--shadow-color) / 0.2),
      4px 8px 8px hsl(var(--shadow-color) / 0.2),
      8px 16px 16px hsl(var(--shadow-color) / 0.2),
      16px 32px 32px hsl(var(--shadow-color) / 0.2)
    `,
};

export const Wrapper = styled.div`
  shadow-color: 0deg 0% 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const WrapperR = styled.div`
  shadow-color: 0deg 0% 50%;
  background-color: hsl(0deg 0% 95%);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const WrapperN = styled.div`
  shadow-color: 0deg 0% 50%;
  background-color: hsl(0deg 0% 95%);
  width: 100%;
  gap: 5px;
  position: relative;
  top: -5rem;
  z-index: 9;
`;

export const BlueWrapper = styled.div`
  shadow-color: 220deg 60% 50%;
  background-color: #efecdb;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Box = styled.div`
  border-radius: 8px;
  background: white;
  box-shadow: #a5b4fc 0px 0px 2px;

  text-align: center;
`;

export const Boxtitle = styled.div`
  padding: 12px;
  text-align: center;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: hsl(0deg 0% 95%);
`;
export const BoxNav = styled.div`
  background: translucent;
  width: 100%;
  position: relative;
  top: 0;
  z-index: 9;
`;
export const SubtleBox = styled.div`
  border-radius: 8px;
  background: white;
  box-shadow: 1px 2px 2px hsl(220deg 60% 50% / 0.333),
    2px 4px 4px hsl(220deg 60% 50^% / 0.333),
    3px 6px 6px hsl(220deg 60% 50% / 0.333);
  padding: 26px;
`;
export const ElevatedBox = styled(Box)`
  border-radius: 8px;
  opacitiy: 1;
  transition: opacity 100ms ease, visibility 100ms ease;
  box-shadow: 0 0 0.5px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.09),
    0 4px 8px rgba(0, 0, 0, 0.09);
  padding: 22px;
  width: 400px;
`;

export const BoxSwim = styled.div`
  @keyframes swimVertical {
    0%,
    100% {
      transform: translateX(0);
    }
    50% {
      transform: translatey(-10px);
    }
  }
  animation: swimVertical 2s ease-in-out infinite;
`;
