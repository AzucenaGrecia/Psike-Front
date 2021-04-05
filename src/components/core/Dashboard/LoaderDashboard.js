import styled from "@emotion/styled";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { colors } from "../../../ui";

const ITEMSLOADER = [1, 2, 3];

export default function LoaderDashboard() {
  return (
    <SkeletonTheme color="#E6E8EA " highlightColor="#F1F2F3">
      <StyledLoaderDashboard>
        {ITEMSLOADER.map((item) => (
          <CardDashboard key={new Date().getTime() + item}>
            <Skeleton className="img" />
            <Skeleton className="name" />
    
          </CardDashboard>
        ))}
      </StyledLoaderDashboard>
    </SkeletonTheme>
  );
}

const CardDashboard = styled.div`
  width: 95%;
  height: 300px;
  background-color: ${colors.white2};
  border-radius: 15px;
  padding: 35px 81px 81px 43px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 0px 18px 0px rgba(240, 240, 240, 1);

  @media (max-width: 450px) {
    & {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`;

const StyledLoaderDashboard = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  margin-top: 20px;
  @media (max-width: 450px) {
    & {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }

  .img {
    height: 143px;
  }
  .name {
    height: 40px;
    margin-top: 10px;
  }


`;
