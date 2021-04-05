import styled from "@emotion/styled";
import { colors } from "../../ui";

export default function InputField({
  name,
  value,
  type,
  placeholder,
  onChange,
}) {
  return (
    <StyledInput
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    ></StyledInput>
  );
}

const StyledInput = styled.input`
  height: 48px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 21px;
  color: ${colors.black};
  padding: 0 15px;
  border-radius: 10px;
  border: none;
  width: auto;
  background: ${colors.white};

  &::placeholder {
    color: ${colors.gray_ligth2};
  }
  &:focus {
    outline: none;
    border: 1px solid ${colors.pink1};
  }
`;
