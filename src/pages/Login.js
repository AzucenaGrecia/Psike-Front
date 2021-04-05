import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Heading3 } from "../components/text/Heading";
import Tabsession from "../components/UI/Tabsession";
import LoginForm from "../features/session/LoginForm";
import SessionError from "../features/session/SessionError";
import { cleanError } from "../features/session/sessionSlice";
import { colors } from "../ui";


export default function Login() {
  const history = useHistory();
  const token = useSelector((state) => state.session.token);
  const tokenSignup = useSelector((state) => state.signup.token);
 
    if (token || tokenSignup) {
      sessionStorage.setItem("token", token);
      history.push("/dashboard");
    }

  return (
    <ContainerLogin>
      <LoginLink>
        <Link to="/login">
          <Tabsession color={colors.orange}>Iniciar Sesion</Tabsession>
        </Link>
        <Link to="/signup">
          <Tabsession>Registrate</Tabsession>
        </Link>
      </LoginLink>
      <Heading3>Iniciar Sesion</Heading3>
      <p>Bienvenido, Ingresa tu correo y tu contrasena</p>
      <SessionError/>
      <LoginForm />
    </ContainerLogin>
  );
}

const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  align-items: center;
  gap: 10px;
  & h3 {
    color: ${colors.blue};
  }
  & a {
    text-decoration: none;
  }
  @media (max-width: 375px) {
    & {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    & h3 {
      text-align: center;
    }
  }
`;
const LoginLink = styled.div`
  display: flex;
  width: 387px;
  height: auto;
  justify-content: space-between;
  margin:0 0 30px 0;
`;
