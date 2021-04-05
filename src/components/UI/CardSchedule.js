import CardContainer from "../Containers/CardContainer";
import SimpleReactComponent from "simple-react-calendar";
import Icon from "./Icon";
import { useState } from "react";
import { ContainerCalendar } from "../showPsychologist/calendarStyles";
import {
  ContainerSchedule,
  ContainerHours,
  StyledOrderedSchedule,
  StyledRow,
} from "../showPsychologist/scheduleStyles";
import { Content, ContentL } from "../text/Content";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../../ui";
import Button from "./Button";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import PaymentModal from "../UI/PaymentModal";
import { toast } from "react-toastify";
import { transformTime } from '../../utils/transformTime';

export default function CardSchedule({ schedules, appointments, styles }) {
  const history = useHistory();
  const [day, setDay] = useState(new Date());
  const [selectSchedule, setSelectSchedule] = useState(null);
  const tokenLogin = useSelector((state) => state.session.token);
  const tokenSignup = useSelector((state) => state.signup.token);

  const options = { weekday: "long", month: "long", day: "numeric" };
  const dateTimeFormat = new Intl.DateTimeFormat("es-ES", options);

  const filterSchedules = schedules.filter(
    (schedule) => schedule.day.day_number === day.getDay()
  );
  const [isOpen, toggle] = useState(false);

  let orderedSchedules = [];
  for (let _element of filterSchedules) {
    orderedSchedules = [...orderedSchedules, filterSchedules.splice(0, 2)];
    orderedSchedules = [...orderedSchedules, filterSchedules.splice(0, 3)];
  }

  const arrToCompareDates = (dateState, dateInput) => {
    let firstDate = new Date(
      Date.UTC(
        dateState.getFullYear(),
        dateState.getMonth(),
        dateState.getDate()
      )
    ).getTime();
    let secondDate = new Date(
      Date.UTC(
        dateInput.getFullYear(),
        dateInput.getMonth(),
        dateInput.getDate()
      )
    ).getTime();

    return [firstDate, secondDate];
  };

  const filterAppointments = appointments.filter((appointment) => {

    let splitDate = appointment.date.split(/\D/);
    let convertDate = new Date(splitDate[0], splitDate[1] - 1, splitDate[2]);
    let valuesToCompare = arrToCompareDates(day, convertDate);
    if (valuesToCompare[0] === valuesToCompare[1]) return appointment;
  });

  const goPastDay = () => setDay(new Date(day.setDate(day.getDate() - 1)));

  const goNextDay = () => setDay(new Date(day.setDate(day.getDate() + 1)));

  const isDisabled = (schedule) => {
    let now = new Date();
    let valuesToCompare = arrToCompareDates(day, now);
    const sameHour = filterAppointments.filter(
      (appointment) =>
        appointment.schedule.hour.start_hour === schedule.hour.start_hour
    );

    return valuesToCompare[0] < valuesToCompare[1] || sameHour.length > 0;
  };

  const bookAppointment = (schedule) => {
    if (!tokenLogin && !tokenSignup) {
      toast.warn("Inicia sesion para reservar una cita!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push("/login");
    }
    toggle(true);
    setSelectSchedule(schedule);
  };

  return (
    <>
     

      {selectSchedule && (
        <PaymentModal
          isOpen={isOpen}
          toggle={toggle}
          schedule={selectSchedule}
          day={day}
        />
      )}

      <CardContainer type="schedule" css={styles}>
 
        <ContentL css={css`color: ${colors.black}; margin-bottom: 30px;`}>Horarios</ContentL>
        <StyledCard>
          <ContainerCalendar>
            <SimpleReactComponent
              selected={day}
              onSelect={setDay}
              headerPrevArrow={<Icon type={"arrowLeft"} size={25} />}
              headerNextArrow={<Icon type={"arrow"} size={25} />}
            />
          </ContainerCalendar>
          <ContainerSchedule>
            <ContentL
              css={css`
                ${dateFormat}
              `}
            >
              {dateTimeFormat.format(day)}
            </ContentL>
            <Content
              css={css`
                ${description}
              `}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Content>
            <ContainerHours>
              <Icon
                onClick={goPastDay}
                styles={arrow}
                type="arrowLeft"
                size={50}
                fill={colors.orange}
              />
              <StyledOrderedSchedule>
                {orderedSchedules.length === 0 && <p>No hay horarios</p>}
                {orderedSchedules.map((schedules) => (
                  <StyledRow>
                    {schedules.map((schedule) => (
                      <Button
                        size="small"
                        outline
                        disabled={isDisabled(schedule)}
                        className={
                          isDisabled(schedule) ? "schedule-disabled" : ""
                        }
                        css={buttonHour}
                        onClick={() => bookAppointment(schedule)}
                      >
                        {transformTime(schedule.hour.start_hour)}
                        {" "}
                        a{" "}
                        {transformTime(schedule.hour.end_hour)}
                      </Button>
                    ))}
                  </StyledRow>
                ))}
              </StyledOrderedSchedule>
              <Icon
                onClick={goNextDay}
                styles={arrow}
                type="arrow"
                size={50}
                fill={colors.orange}
              />
            </ContainerHours>
          </ContainerSchedule>
        </StyledCard>
      </CardContainer>
    </>
  );
}

const StyledCard = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

const NotSchedule = styled.p`
  text-align: center;
`;

const dateFormat = css`
  text-align: center;
  text-transform: capitalize;
`;

const description = css`
  text-align: center;
  color: ${colors.gray};
`;

const buttonHour = css`
  font-family: "Inter";
  padding: 16px 27px;
  line-height: 19px;
  font-weight: 600;
`;
const arrow = css`
  cursor: pointer;
`;
