import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { ContentM, ContentSB, ContentXSB } from "../components/text/Content";
import { Heading1, Heading3 } from "../components/text/Heading";
import Avatar from "../components/UI/Avatar";
import CardDashBoard from "../components/UI/CardDashBoard";
import { fetchShowProfile } from "../features/profile/profileSlice";
import { fetchQuotes } from "../features/quotes/quotesSlice";

import { colors } from "../ui";
import { Helmet } from "react-helmet";
import LoaderDashboard from "../components/core/Dashboard/LoaderDashboard";
import NotFoundItems from "../components/UI/NotFoundItems";

export default function Dashboard() {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes.items);
  const token = sessionStorage.getItem("token");
  const status = useSelector((state) => state.quotes.status);
  const user = useSelector((state) => state.profile.userdata);
  const history = useHistory();

  useEffect(() => {
    if (token) {
      dispatch(fetchShowProfile(token));
      dispatch(fetchQuotes(token));
    }
  }, [token]);

  const transformTime = (time) =>
    time.toString().length === 1 ? `0${time.toString()}` : time;

  if (!token) return <Redirect to="/login" />;

  function filterDashboard() {
    return quotes.filter((quo) => {
      let now = new Date(
        Date.UTC(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate()
        )
      ).getTime();

      let splitDate = quo.date.split(/\D/);
      let convertDate = new Date(splitDate[0], splitDate[1] - 1, splitDate[2]);
      let thirDate = new Date(
        Date.UTC(
          convertDate.getFullYear(),
          convertDate.getMonth(),
          convertDate.getDate()
        )
      ).getTime();
      if (
        thirDate == now &&
        new Date(quo.schedule.hour.start_hour).getUTCHours() >=
          new Date().getHours()
      ) {
        return quo;
      } else if (thirDate > now) {
        return quo;
      }
    });
  }

  function orderBoard() {
    return filterDashboard().sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <DashboardStyled>
        <DashboardUser>
          <DashUserData>
            <Heading1>HOLA,</Heading1>
            <Heading1>
              <p>{user.name}!</p>
            </Heading1>
          </DashUserData>
          <ContentM>
            <span>nos encanta tenerte de nuevo por aqui.</span>
          </ContentM>
        </DashboardUser>

        <Heading3>Tus proximas citas son:</Heading3>
        <br />
        {status === "loading" && <LoaderDashboard />}

        {status === "succeeded" && (
          <>
            {orderBoard().length === 0 ? (
              <NotFoundItems message="No existen citas relacionadas" />
            ) : (
              <BodyBoard>
                {orderBoard().map((quo) => {
                  return (
                    <CardDashBoard
                      name={quo.psychologist.name}
                      date={new Date(quo.date.concat("T00:00:00"))}
                      hora={transformTime(
                        new Date(quo.schedule.hour.start_hour).getUTCHours()
                      )}
                      minutes={transformTime(
                        new Date(quo.schedule.hour.start_hour).getUTCMinutes()
                      )}
                      reazon={quo.reason}
                      onClick={() => history.push(`/appoitments/${quo.id}`)}
                    />
                  );
                })}
              </BodyBoard>
            )}
          </>
        )}
      </DashboardStyled>
    </>
  );
}

function AvatarHeader({ name, lastname, onClick }) {
  return (
    <DashboardHeader>
      <DashLogout>
        <Avatar />
        <ContentLogout>
          <ContentSB>
            {name} {lastname}
          </ContentSB>
          <Link to="/login" onClick={onClick}>
            <ContentXSB>Logout</ContentXSB>
          </Link>
        </ContentLogout>
      </DashLogout>
    </DashboardHeader>
  );
}

const DashboardStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  & h3 {
    color: ${colors.black};
  }
  @media (max-width: 450px) {
    & {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-self: center;
    }
  }
`;
const DashboardHeader = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  @media (max-width: 450px) {
    & {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
`;
const DashLogout = styled.div`
  display: flex;
  width: auto;
  height: auto;
  gap: 10px;
  & a {
    text-decoration: none;
    color: ${colors.blue};
  }
`;
const ContentLogout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0px;
`;
const DashboardUser = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  & span {
    color: ${colors.black};
    font-weight: 500;
  }
`;
const DashUserData = styled.div`
  display: flex;
  gap: 10px;
  & h1 {
    color: ${colors.black};
  }
  & p {
    color: ${colors.orange};
  }
  @media (max-width: 450px) {
    & {
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
`;
const BodyBoard = styled.div`
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
`;
export { AvatarHeader };
