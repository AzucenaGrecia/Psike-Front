import styled from "@emotion/styled";
import React from "react";
import { useHistory } from "react-router";
import Button from "./Button";

export default function NotFoundItems({ message }) {
  const history = useHistory();

  return (
    <StyledNotFoundAppointments>
      <img src="/images/doctor-man.svg" width="150" />
      <p className="msg">{message}</p>
      <Button
        onClick={() => {
          history.push("psychologists");
        }}
      >
        Buscar psicologos
      </Button>
    </StyledNotFoundAppointments>
  );
}

const StyledNotFoundAppointments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .msg {
    font-size: 1.2rem;
  }
`;
