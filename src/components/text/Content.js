import { css } from "@emotion/react";
import styled from "@emotion/styled";

const baseStylesNormal = css`
  font-family: "Roboto";
  font-weight: 400;
`;

export const Content = styled.p`
  ${baseStylesNormal}
  font-size: 20px;
  line-height: 23px;
  ${(props) => props.css}
`;

export const ContentXL = styled(Content)`
  font-size: 40px;
  font-weight: 500;
  line-height: 47px;
`;
export const ContentL = styled(Content)`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
`;
export const ContentM = styled(Content)`
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
`;
export const ContentMB = styled(Content)`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
`;

export const ContentS = styled(Content)`
  font-size: 18px;
  font-weight: 300;
  line-height: 21px;
`;

export const ContentSB = styled(Content)`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
`;
export const ContentSBB = styled(Content)`
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
`;
export const ContentXS = styled(Content)`
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
`;
export const ContentXSB = styled(Content)`
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
`;
export const ContentXXS = styled(Content)`
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
`;
export const ContentXXSB = styled(Content)`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
`;
