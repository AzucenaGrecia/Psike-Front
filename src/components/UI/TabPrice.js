import React from "react";
import styled from "@emotion/styled";
import { ContentXL, ContentXSB } from "../text/Content";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { colors } from "../../ui";

/**
 * @param {*} price
 * @param {*} size (normal && small)(default normal)
 * @param {*} bg
 * @param {*} color
 * @returns Component
 */
export default function TabPrice({ price, size, bg, color, css }) {
  return (
    <StyledTabPrice size={size} bg={bg} color={color} css={css}>
      <ContentXSB>Costo por cita:</ContentXSB>
      <ContentXL>${price}</ContentXL>
    </StyledTabPrice>
  );
}

const StyledTabPrice = styled.div(
  (props) => css`
    width: 180px;
    height: 70px;
    background-color: ${props.bg ? props.bg : colors.sky_blue};
    color: ${props.color ? props.color : colors.gray1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  

    ${props.size === "small" &&
    `width:100px;
     height:45px;
     margin: 5px;
     background-color:${props.bg ? props.bg :"rgba(255, 255, 255, 0.8);"};
     color:${props.color ? props.color : colors.gray_ligth2};
     & :first-of-type {
      font-size: 10px;
     }
     & :nth-of-type(2n) {
      font-size: 20px;
      line-height:20px;
     }
    `};

    ${props.css}
  `
);

TabPrice.propTypes = {
  price: PropTypes.number,
  size: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
};

TabPrice.defaultProps = {
  size: "normal",
};
