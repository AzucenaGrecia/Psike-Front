import styled from "@emotion/styled";
import { colors } from "../../ui";
import { Content, ContentM } from "../text/Content";
import { Heading3, Heading4 } from "../text/Heading";
import Icon from "../UI/Icon";
import Image from "../UI/Image";
import TabPrice from "../UI/TabPrice";
import CardContainer from "./CardContainer";
import { css } from '@emotion/react';

export default function CardShow({ psychologist, styles }) {
  const imgDefault = 'https://bit.ly/31GAc24'
  const icons = ["fb", "google", "linkedin", "slack", "twitter"];

  return (
    <CardContainer type="schedule" css={styles}>
      <StyledCard>
        <ContainerImg>
          <Image
            className="img-small"
            size="medium"
            url={psychologist.avatar || imgDefault}
          >
            <TabPrice
              price={psychologist.price}
              size="normal"
              bg="rgba(202, 214, 236, 0.8)"
              color={`${colors.black}`}
            />
          </Image>
        </ContainerImg>

        <ShowSection>
          <StyledContent>
            <Heading3 style={css`color: ${colors.black};`}>
              {psychologist.name} {psychologist.lastname}
            </Heading3>

            <Heading4 style={css`color: ${colors.gray_ligth};`}>
              Psicología Clínica
            </Heading4>

            <BodyIcons>
              {icons.map((icon) => (
                <Icon type={icon} size={24} fill={colors.black} />
              ))}
            </BodyIcons>

            <Content css={css`width: 100%; color:${colors.black};`}>
              {psychologist.biography}
            </Content>
          </StyledContent>
            <FooterIcons>
              <Icon size={28} type="chat" fill={`${colors.pink1}`} />
              <ContentM>({psychologist.comments_total})</ContentM>

              <Icon size={28} type="start" fill={`${colors.orange}`} />
              <ContentM>({psychologist.ranking_total})</ContentM>
            </FooterIcons>
        </ShowSection>
      </StyledCard>
    </CardContainer>
  );
}

const StyledCard = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 27px;
  @media (max-width: 768px) {
    & {
      display: flex;
      flex-direction: column;
      width: 100%;

    }
  }
`;
const ContainerImg = styled.div`
  & .img-small {
    border-radius: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  @media (max-width: 768px) {
    & .img-small {
      justify-content: center; 
      align-items: flex-end;
    }
  }
`;
const ShowSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  gap: 15px;
`

const BodyIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const FooterIcons = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 10px;
`;
