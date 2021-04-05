import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { ContentXS } from "../../components/text/Content";

export default function SingError() {
  const error = useSelector((state) => state.signup.errors);
  const errorEmail = error;
  return (
    <ContentXS>
      <Paragraph>{error}</Paragraph>
    </ContentXS>
  );
}

const Paragraph = styled.p`
  color: red;
`;
