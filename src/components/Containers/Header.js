import styled from "@emotion/styled";
import { colors } from "../../ui";
import { Heading5 } from "../text/Heading";
import Button from "../UI/Button";

export default function Header() {
  return (
    <StyledHeader>
      <div className="header">
        <div className="navbar">
          <Heading5>Nosotros</Heading5>
          <Heading5>Psicologos</Heading5>
        </div>
        <div className="buttons">
          <Button size="small" bg={`${colors.gray}`}>
            Login
          </Button>
          <Button size="small" bg={`${colors.gray}`}>
            Signup
          </Button>
        </div>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navbar {
    display: flex;
    gap: 30px;
    color: ${colors.gray};
  }
  .buttons {
    display: flex;
    gap: 16px;
  }
  @media (min-width: 320px) {
    .header {
      flex-wrap: wrap;
      gap: 40px;
    }
  }
`;
