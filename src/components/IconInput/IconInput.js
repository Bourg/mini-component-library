import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  large: {
    iconSize: "16px",
    fontSize: `${18 / 16}rem`,
    padding: "4px 8px 4px 24px",
    borderSize: "2px",
  },
  small: {
    iconSize: "10px",
    fontSize: `${14 / 16}rem`,
    padding: "2px 4px 2px 16px",
    borderSize: "1px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = STYLES[size];
  if (!style) {
    throw new Error(`Invalid size '${size}'`);
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": style.iconSize }}>
        <Icon id={icon} size={style.iconSize} strokeWidth={style.borderSize} />
      </IconWrapper>
      <NativeInput width={width} placeholder={placeholder} {...style} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  width: ${(p) => p.width};
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeInput = styled.input`
  padding: ${(p) => p.padding};
  border: none;
  border-bottom: ${(p) => p.borderSize} solid ${COLORS.black};
  font-size: ${(p) => p.fontSize};
  font-weight: 700;
  outline-offset: 4px;
  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 2px;
  height: var(--size);
  width: var(--size);
  margin: auto;
`;

export default IconInput;
