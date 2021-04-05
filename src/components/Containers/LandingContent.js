import styled from "@emotion/styled";
import {  useHistory } from "react-router-dom";
import { colors } from "../../ui";
import { ContentMB, ContentS } from "../text/Content";
import { Heading1 } from "../text/Heading";
import Button from "../UI/Button";
import Icon from "../UI/Icon";
import Image from "../UI/Image";

export default function LandingContent() {
  const history = useHistory();

  const handleRedirect = () => {
    return history.push("/psychologists");
  };
  return (
    <StyledLanding>
      <div className="landing">
        <div className="landing-content">
          <ContentMB>PSICOLOGOS A TU ALCANCE</ContentMB>
          <Heading1>Busca & Encuentra el psicologo para ti</Heading1>
          <div className="iconscontainer">
            <div className="benefits">
              <Icon type="home" fill={`${colors.pink1}`} size="35" />
              <ContentS>Consultas Online</ContentS>
            </div>
            <div className="benefits">
              <Icon type="cursor" fill={`${colors.pink1}`} size="35" />
              <ContentS>Agenda tu cita en un click</ContentS>
            </div>
            <div className="benefits">
              <Icon type="mind" fill={`${colors.pink1}`} size="35" />
              <ContentS>Especialistas en salud mental</ContentS>
            </div>
            <div className="benefits">
              <Icon type="userheart" fill={`${colors.pink1}`} size="35" />
              <ContentS>Seleciona tu psicologo segun tus necesidades</ContentS>
            </div>
          </div>
          <Button size="large" onClick={handleRedirect}>
            Encuentra a tu psicologo
          </Button>
        </div>

        <div className="landing-image">
          <Image
            size="large"
            url="https://www.oximesa.es/blog/wp-content/uploads/2019/12/Ir-al-psic%C3%B3logo-no-significa-estar-loco.jpg"
          />
        </div>
      </div>
    </StyledLanding>
  );
}

const StyledLanding = styled.div`
  & .landing {
    margin: 20px 0px;
    display: flex;
    align-items: center;

    gap: 20px;
    .landing-content {
      p,
      h1 {
        color: ${colors.black};
      }
    }
  }
  & .iconscontainer {
    margin: 35px 0px;
    display: flex;
    flex-wrap: wrap;
    .benefits {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 50%;
      margin: 15px 0px;
      p {
        color: ${colors.gray};
      }
    }
  }
  @media (max-width: 768px) {
    .landing {
      justify-content: space-between;

      .landing-content {
        margin: 10% 0;
        h1 {
          font-size: 3rem;
          line-height: 3rem;
        }
      }
    }
    .landing-image {
      display: none;
    }
  }
  @media (max-width: 425px) {
    .landing {
    }
    .landing-content {
      p:first-of-type {
        text-align: center;
      }
      margin: 20% 0;
      h1 {
        text-align: center;
        font-size: 3rem;
        line-height: 3rem;
      }
    }
  }
`;
