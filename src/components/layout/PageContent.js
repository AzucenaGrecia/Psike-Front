import styled from "@emotion/styled";
import React from "react";
import Header from "./Header";

export default function PageContent({ children }) {
  return (
    <StyledPageContent>
      <Header />
      {children}
    </StyledPageContent>
  );
}

const StyledPageContent = styled.div`

  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  padding: 0px 60px;
  @media (max-width: 950px) {
    & {
      /* width: 100%; */
      padding: 0 10px;
    }
  }
`;
