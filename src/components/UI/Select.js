import styled from "@emotion/styled";
import { colors } from "../../ui";

function SelectItem({ name, children, onChange }) {
  return (
    <StyledSelect name={name} onChange={onChange}>
      {children}
    </StyledSelect>
  );
}

function SelectCountry({ name, children, onChange }) {
  return (
    <StyledSelectCountry name={name} onChange={onChange}>
      {children}
    </StyledSelectCountry>
  );
}

const StyledSelect = styled.select`
  appearance: none;
  background: ${colors.white2};
  border: none;
  border-radius: 10px;
  height: 48px;
  padding: 16px 35px 16px 16px;
  cursor: pointer;
  color: ${colors.gray_ligth2};
  font-family: "Inter";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  outline: none;
`;
const StyledSelectCountry = styled.select`
  appearance: none;
  background: ${colors.white2};
  border: none;
  height: 48px;
  padding: 13px 0px 13px 35px;
  border-radius: 10px;
  cursor: pointer;
  color: ${colors.black};
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  outline: none;
  width: 100%;
`;

export { SelectItem, SelectCountry };
