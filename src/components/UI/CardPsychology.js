import styled from "@emotion/styled";
import { colors } from "../../ui";
import { ContentXS, ContentXSB, ContentXXSB } from "../text/Content";
import { Heading6 } from "../text/Heading";
import Icon from "./Icon";
import Imagen from "./Image";
import TabPrice from "./TabPrice";
import { TagItem } from "./Tag";
import CardContainer from "../Containers/CardContainer";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { updateStatus } from '../../features/psychologist/showPsychologistSlice';
import { css } from '@emotion/react';

export default function CardPsychology({
  id,
  name,
  bio,
  price,
  coments,
  ranking,
  specialties,
  avatar
}) {
  const history = useHistory();
  const dispatch = useDispatch();

  const navigateShowPsy = () => {
    dispatch(updateStatus());
    history.push(`/psychologists/${id}`);
  };
  return (
    <>
      <CardContainer type={"schedule"} css={container}>
        <StyledCardPsychology>
          {/* <div className="hero-card"> */}
            <Imagen
              css={image}
              url={avatar}
              size="small"
              className={"image-psy"}
              onClick={navigateShowPsy}
            >
              <TabPrice price={price} size="small" css={css`margin: 0;`} />
            </Imagen>
            <div className="mainContent">
              <Heading6 onClick={navigateShowPsy} className="namePsy">
                Lic. {name}
              </Heading6>
              <ContentXXSB>Psicologa Clínica</ContentXXSB>
              <div className="tagsContainer">
                {specialties.map((spe) => (
                  <TagItem key={spe.name}>{spe.name}</TagItem>
                ))}
              </div>
              <div className="bioContainer">
                <ContentXS>{bio}</ContentXS>
              </div>
            </div>
          {/* </div> */}
          <div className="stadisticsContainer">
            <div className="stadisticsItem">
              <Icon type="chat" fill={colors.pink1} size="25" />
              <ContentXSB>({coments})</ContentXSB>
            </div>

            <div className="stadisticsItem">
              <Icon type="start" fill={colors.orange} size="25" />
              <ContentXSB>({ranking})</ContentXSB>
            </div>
          </div>
        </StyledCardPsychology>
      </CardContainer>
    </>
  );
}
const StyledCardPsychology = styled.div`
  height: 100%;

  & .image-psy {
      cursor: pointer;
  }

  & .mainContent {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 10px;
  }

  & .namePsy {
      cursor: pointer;
      margin-top:10px;
    }

  & .tagsContainer {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      height: 58px;
      overflow: hidden;
    }
  
  
  & .bioContainer {
    height: 80px;
    overflow: hidden;
  }

  & .stadisticsContainer {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
  & .stadisticsItem {
    display: flex;
    gap: 5px;
    align-items: center;
  }
`;

const container = css`
  height: auto;
  max-height: 485px;
` 

const image = css`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 200px;
`

// "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"