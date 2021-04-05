import styled from "@emotion/styled";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import CardContainer from "../../Containers/CardContainer";

const ITEMSLOADER = [1, 2, 3, 4, 5, 6, 7, 8];

export default function LoaderPsychologists() {
  return (
    <SkeletonTheme color="#E6E8EA " highlightColor="#F1F2F3">
      <StyledLoaderPsychologists>
        {ITEMSLOADER.map((item) => (
          <CardContainer type={"schedule"} key={new Date().getTime() + item}>
            <Skeleton className="img"/>
            <Skeleton className="name"/>
            <Skeleton className="title"/>
            <Skeleton className="content"/>
          </CardContainer>
        ))}
      </StyledLoaderPsychologists>
    </SkeletonTheme>
  );
}

const StyledLoaderPsychologists = styled.div`
  width: 100%;
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  align-items: center;

  .img{
    height: 143px;
  }
  .name{
    height: 20px;
    margin-top:20px;
  }

  .title{
    height: 15px;
    margin-top:10px;
  }
  .content{
    height: 150px;
    margin-top:10px;
  }
`;
