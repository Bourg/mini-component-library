/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  large: { height: "24px", padding: "4px", radius: "8px" },
  medium: { height: "12px", padding: "0", radius: "4px" },
  small: { height: "8px", padding: "0", radius: "4px" },
};

const ProgressBar = ({ value, size }) => {
  const percent = Math.max(0, Math.min(100, value));

  return (
    <Wrapper
      size={size}
      style={{
        "--height": STYLES[size].height,
        "--padding": STYLES[size].padding,
        "--radius": STYLES[size].radius,
      }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <BarWrapper>
        <Bar percent={percent} />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: var(--height);
  width: 100%;
  padding: var(--padding);
  border-radius: var(--radius);
  background-color: ${COLORS.transparentGray15};
  overflow: hidden;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: ${(p) => p.percent}%;
  height: 100%;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
