import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../../ui";
import CardContainer from "../Containers/CardContainer";
import { Content, ContentS, ContentSBB } from "../text/Content";

export default function CardComment({ comment }) {
  const imgDefault = 'https://bit.ly/31GAc24'
  
  return (
    <CardContainer type="comment" css={card}>
      <StyledCard>
        <Content css={description}>
          {comment.description}
        </Content>
        <ContainerPatient>
          <StyledPicture picture={comment.patient.avatar || imgDefault}></StyledPicture>
          <div>
            <ContentSBB css={css`color: ${colors.black};`}>
              {comment.patient.name} {comment.patient.lastname}
            </ContentSBB>
            <ContentS css={css`color: ${colors.pink1};`}>Patient</ContentS>
          </div>
        </ContainerPatient>
      </StyledCard>
    </CardContainer>
  );
}

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContainerPatient = styled.div`
  display: flex;
  gap: 20px;
  background-color: ${colors.gray_ligth3};
  border-radius: 20px;
  align-items: center;
  padding: 12px 0 12px 50px;
`

const StyledPicture = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url('${props => props.picture}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const card = css`
  padding: 0;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
` 

const description = css`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 5px 50px;
  color: ${colors.gray};
`