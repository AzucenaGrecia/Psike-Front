import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { fetchLogin } from "./sessionSlice";
import { ContentXS, ContentXSB } from "../../components/text/Content";
import InputField from "../../components/UI/Input";
import styled from "@emotion/styled";
import Button from "../../components/UI/Button";
import { colors } from "../../ui";
import { toast } from "react-toastify";

export default function LoginForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const status = useSelector((state) => state.session.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validLogin(email, password) === true) {
      dispatch(fetchLogin({ email, password }));
      //sessionStorage.setItem("email",email);
    }
  };

  function validLogin(email, password) {
    function validEmail(email) {
      if (/\S+@gmail\.com/i.test(email)){
        return true;
      } else {
        setValidEmail(true);
      }
    }

    function validPassword(password) {
      return password.length >= 6 &&  password.split(' ').length === 1 ? true : (setValidPassword(true))
    }
    return validEmail(email), validPassword(password);
  }

  return (
    <FormLogin onSubmit={handleSubmit}>
      <ContainerInput>
        <ContentXSB>Correo Electronico :</ContentXSB>
        <InputField
          type="email"
          placeholder="Correo Electronico"
          onChange={(e) => setEmail(e.target.value)}
        />
        {validEmail && (
          <ContentXS>
            <SpanError>
              el campo no pude estar vacio y/o formato incorrecto
            </SpanError>
          </ContentXS>
        )}
      </ContainerInput>

      <ContainerInput>
        <ContentXSB>Contraseña :</ContentXSB>
        <InputField
          type="password"
          placeholder="Contrasena"
          onChange={(e) => setPassword(e.target.value)}
        />
        {validPassword && (
          <ContentXS>
            <SpanError>el password tiene que ser mayor a 6 digitos y no puede tener espacios</SpanError>
          </ContentXS>
        )}
      </ContainerInput>

      <Button
        size="medium"
        outline={false}
        bg={colors.blue_ligth}
        color={"white"}
        type="submit"
        disabled={status === "loading" ? true : false}
      >
        {status === "loading" ? "cargando..." : "Iniciar Sesion"}
      </Button>
    </FormLogin>
  );
}

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 387px;
  height: auto;
  @media (max-width: 375px) {
    & {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 10px;
`;

const SpanError = styled.span`
  color: red;
`;
export { SpanError };
