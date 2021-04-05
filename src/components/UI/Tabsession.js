import styled from "@emotion/styled"
import { colors } from "../../ui";

export default function Tabsession({children,color=colors.gray_ligth2}){
    return(
        <StyledTab color={color}>{children}</StyledTab>
    )
}

const StyledTab = styled.div`
  width: 170px;
  height: 46px;
  display:flex;
  justify-content:center;
  border-bottom: 4px solid ${(props)=>props.color};
  color: ${(props)=>props.color};
  font-family: Raleway;
  font-style: normal;
  font-weight: 800;
  font-size: 1.2rem;
  line-height: 28px;
  cursor:pointer;
  &:hover{
  border-bottom: 4px solid ${colors.orange};
  color: ${colors.orange};
}
`
