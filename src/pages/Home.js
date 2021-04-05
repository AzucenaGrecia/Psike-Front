import React from "react";
import LandingContent from "../components/Containers/LandingContent";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Psike - Reserva tu cita con los mejores Psicologos</title>
        <meta name="Busca & Encuentra el psicologo para ti" content="Busca & Encuentra el psicologo para ti" />
      </Helmet>
      <LandingContent />
    </>
  );
}
