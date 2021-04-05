/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../../ui";

export default function Pagination({ limit, total, page, onSelectPage, css }) {
  const pages = Math.ceil(total / limit);
  const listItems = [];

  for (let i = 1; i <= pages; i++) {
    listItems.push(
      <LiStyle
        key={i}
        selector={i}
        onClick={() => onSelectPage(i)}
        data={page}
      ></LiStyle>
    );
  }

  return <UlStyle css={css}>{listItems}</UlStyle>;
}

const selected = css`
  background-color: ${colors.orange};
`;
const UlStyle = styled.ul`
  height: 30px;
  padding: 12px 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  ${props => props.css};
`;
const LiStyle = styled.li`
  width: 20px;
  height: 20px;
  display: flex;
  margin-right: 13px;
  justify-content: center;
  list-style-type: none;
  text-align: center;
  align-items: center;
  background-color: ${colors.gray_ligth};
  border-radius: 50%;
  ${(prop) => (prop.selector === prop.data ? selected : "")}
`;
