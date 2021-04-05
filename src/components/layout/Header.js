import React, { useEffect, useState } from "react";
import { colors } from "../../ui";
import Button from "../UI/Button";
import styled from "@emotion/styled";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MenuMobile from "../Containers/MenuMobile";
import { AvatarHeader } from "../../pages/Dashboard";
import { fetchShowProfile } from "../../features/profile/profileSlice";
import { killToken } from "../../features/session/sessionSlice";
import { killSign } from "../../features/signup/signSlice";
import { cleanQuotes } from "../../features/quotes/quotesSlice";

export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.session.token);
  const tokenSignup = useSelector((state) => state.signup.token);
  const user = useSelector((state) => state.profile.userdata);
  useEffect(() => {
    if (token) {
      dispatch(fetchShowProfile(token));
    }
  }, []);

  function kill() {
    return dispatch(killToken()), dispatch(killSign()), dispatch(cleanQuotes());
  }

  return (
    <StyledHeader className="header">
      <div className="logo">
        <a
          onClick={() => {
            history.push(`/`);
          }}
        >
          P<span>SIKE</span>
        </a>
      </div>
      <div className="menu-mobile">
        <MenuMobile />
      </div>

      <div className="navigation">
 
        <div className="menu-mobile" id="menu-mobile">
          <MenuMobile />
        </div>

        <div className="navigation">
          <NavLink to="/psychologists" activeClassName="selected">
            Psicologos
          </NavLink>

          {(token || tokenSignup) && (
            <>
              <NavLink to="/dashboard" activeClassName="selected">
                Dashboard
              </NavLink>

              <NavLink to="/appoitments" activeClassName="selected">
                Historial
              </NavLink>

              <AvatarHeader
                name={user.name}
                lastname={user.lastname}
                onClick={() => dispatch(kill())}
              />
            </>
          )}

          {!(token || tokenSignup) && (
            <div className="actions">
              <Button
                size="small"
                bg={colors.pink1}
                onClick={() => {
                  history.push("/login");
                }}
              >
                Iniciar Sesion
              </Button>
            </div>
          )}
        </div>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  height: auto;
  .logo {
    font-weight: 900;
    font-size: 1.8rem;
    color: ${colors.orange};
    span {
      color: ${colors.orange_ligth};
    }
  }
  .navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;
    .selected {
      color: ${colors.gray};
      font-weight: 600;
    }
    a {
      cursor: pointer;
      font-size: 1rem;
      color: ${colors.gray_ligth};
      font-weight: 600;
      text-decoration: none;
      &:hover {
        color: ${colors.gray};
        font-weight: 600;
      }
    }

    .actions {
      display: flex;
      gap: 20px;
    }
  }
  .menu-mobile {
    display: none;
  }

  @media (max-width: 768px) {
    .navigation {
      display: none;
    }
    .menu-mobile {
      display: block;
    }
  }
`;
