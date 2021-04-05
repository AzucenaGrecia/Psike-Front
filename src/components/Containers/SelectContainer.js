import styled from "@emotion/styled";

export default function OptionContainer({ children, type }) {
  return <StyledDiv type={type}>{children}</StyledDiv>;
}
const StyledDiv = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 30%;
    left: ${(props) => (props.type == "profile" ? "90%" : "80%")};
  }
`;
