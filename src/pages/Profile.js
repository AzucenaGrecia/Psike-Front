import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import Image from "../components/UI/Image";
import InputField from "../components/UI/Input";
import { ContentXSB } from "../components/text/Content";
import FormField from "../components/Containers/FormField";
import countryList from "react-select-country-list";
import { SelectCountry } from "../components/UI/Select";
import OptionContainer from "../components/Containers/SelectContainer";
import Icon from "../components/UI/Icon";
import { colors } from "../ui";
import Button from "../components/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import {
  fetchShowProfile,
  fetchUpdateProfile,
} from "../features/profile/profileSlice";
import { Helmet } from "react-helmet";

export default function Profile() {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const options = useMemo(() => countryList().getData(), []);
  const status = useSelector((state) => state.profile.status);
  const tokenLogin = useSelector((state) => state.session.token);
  const tokenSignup = useSelector((state) => state.signup.token);
  const dispatch = useDispatch();
  const infoUser = useSelector((state) => state.profile.userdata);
  if (status === "idle") {
    dispatch(fetchShowProfile(tokenLogin));
  }

  const [form, setForm] = useState({
    name: infoUser.name,
    lastname: infoUser.lastname,
    identity_document: infoUser.identity_document,
    nationality: infoUser.nationality,
    birthdate: infoUser.birthdate,
    email: infoUser.email,
    // avatar: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // for (let key in form) {
    //   formData.append(key, form[key]);
    // }
    dispatch(fetchUpdateProfile({ form, tokenLogin }));
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  useEffect(() => {
    setForm({
      name: infoUser.name,
      lastname: infoUser.lastname,
      identity_document: infoUser.identity_document,
      nationality: infoUser.nationality,
      birthdate: infoUser.birthdate,
      email: infoUser.email,
      // avatar: null,
    });
  }, [infoUser]);

  const {
    name,
    lastname,
    identity_document,
    nationality,
    birthdate,
    email,
  } = form;

  if (!tokenLogin && !tokenSignup) return <Redirect to="/login" />;

  return (
    <>
      <Helmet>
        <title>Mi Perfil</title>
        <meta
          name="Busca & Encuentra el psicologo para ti"
          content="Busca & Encuentra el psicologo para ti"
        />
      </Helmet>
      <StyledContiner>
        <div>
          <form id="edit-profile-form" onSubmit={handleSubmit}>
            <div className="profile-inputs">
              <FormField>
                <ContentXSB>Nombres:</ContentXSB>
                <InputField
                  name="name"
                  value={name}
                  type="text"
                  placeholder="coloca aqui tu nombre...."
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                ></InputField>
              </FormField>

              <FormField>
                <ContentXSB>Apellidos:</ContentXSB>
                <InputField
                  name="lastname"
                  value={lastname}
                  type="text"
                  placeholder="coloca aqui tus apellidos...."
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                ></InputField>
              </FormField>

              <FormField>
                <ContentXSB>Documento de Identidad:</ContentXSB>
                <InputField
                  name="identity_document"
                  value={identity_document}
                  type="text"
                  placeholder="coloca aqui tu DNI...."
                  onChange={(e) =>
                    setForm({
                      ...form,
                      [e.target.name]: e.target.value,
                    })
                  }
                ></InputField>
              </FormField>

              <FormField>
                <ContentXSB>Fecha de Nacimiento:</ContentXSB>
                <InputField
                  name="birthdate"
                  value={birthdate}
                  type="date"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      [e.target.name]: e.target.value,
                    })
                  }
                ></InputField>
              </FormField>

              <FormField>
                <ContentXSB>Correo:</ContentXSB>
                <InputField
                  name="email"
                  value={email}
                  type="text"
                  placeholder="ejemplo@gmail.com"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      [e.target.name]: e.target.value,
                    })
                  }
                ></InputField>
              </FormField>

              <FormField>
                <ContentXSB>Nacionalidad:</ContentXSB>

                <OptionContainer type="profile">
                  <Icon type="arrowDrop" size="25" fill={`${colors.orange}`} />
                  <SelectCountry
                    name="nationality"
                    value={nationality}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        [e.target.name]: e.target.value,
                      })
                    }
                  >
                    {options.map((option) => (
                      <option>{option.label}</option>
                    ))}
                  </SelectCountry>
                </OptionContainer>
              </FormField>
            </div>
          </form>
        </div>
        <div className="save-button">
          <Button form="edit-profile-form" type="submit" bg={colors.blue_ligth}>
            Guardar
          </Button>
        </div>
      </StyledContiner>
    </>
  );
}

const StyledContiner = styled.div`
  form {
    width: fit-content;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: start;
  }
  .profile-photo {
    width: 30%;
    position: relative;
  }
  .profile-inputs {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .button-image {
    background-color: rgba(255, 255, 255, 0.7);
    padding: 20px;
    border-radius: 50px;
    border: none;
    position: absolute;
    top: 140px;
    right: 130px;
  }
  .save-button {
    width: 387px;
    button {
      width: 100%;
    }
  }
`;
