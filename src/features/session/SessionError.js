import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { ContentXS } from "../../components/text/Content";

export default function SessionError() {
  //const error = useSelector((state) => state.session.error);
  const status = useSelector((state) => state.session.error);
  return (
    <ContentXS>
      <Paragraph>{status}</Paragraph>
    </ContentXS>
  );
}

const Paragraph = styled.p`
  color: red;
`;
