import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../../ui";
import CardContainer from "../Containers/CardContainer";
import Pagination from "../Containers/Pagination";
import { ContentL, ContentXSB } from "../text/Content";
import { TagItemFill } from "./Tag";

export default function CardSpecialties({ specialties, styles }) {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 3;

  return (
    <CardContainer type="specialties" css={styles}>
      <StyledCard>
        <StyledSpecialties>
          <ContentL css={css`color: ${colors.black};`}>Especialidades</ContentL>

          {specialties
            .slice((currentPage - 1) * limit, currentPage * limit)
            .map((specialty) => (
              <>
                <ContentXSB css={css`color: ${colors.black};`}>{specialty.name}</ContentXSB>
                <div className="especialtiesComents">
                  {specialty.subspecialties.slice(0,2).map((subspecialty) => (
                    <TagItemFill>{subspecialty}</TagItemFill>
                  ))}
                </div>
              </>
            ))}
          </StyledSpecialties>
        <Pagination
          total={specialties.length}
          page={currentPage}
          limit={limit}
          onSelectPage={(pageNum) => setCurrentPage(pageNum)} 
          css={css`align-self: center;`}/>
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
  gap: 15px;

  & .especialtiesComents {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
`;

const StyledSpecialties = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
