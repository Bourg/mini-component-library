import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  opacity: 0;
`;

const PresentationalSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  font-size: 1rem;
  color: ${COLORS.gray700};
  padding: 12px 52px 12px 16px;
  border-radius: 8px;

  &:hover {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const PositionedIcon = styled(Icon)`
  position: absolute;
  right: 8px;
  top: 0;
  bottom: 0;
  height: 24px;
  margin: auto 0;
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalSelect>
        {displayedValue}
        <PositionedIcon id="chevron-down" strokeWidth={1} size={24} />
      </PresentationalSelect>
    </Wrapper>
  );
};

export default Select;
