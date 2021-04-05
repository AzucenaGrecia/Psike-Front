import Icon from "../UI/Icon";

const SideBarDataLogin = [
  {
    title: "Inicio",
    path: "/",
    icon: <Icon type="home" size={20} />,
    cName: "nav-text",
  },
  {
    title: "Historial",
    path: "/appoitments",
    icon: <Icon type="survey" size={20} />,
    cName: "nav-text",
  },
  {
    title: "Mi perfil",
    path: "/profile",
    icon: <Icon type="smile" size={20} />,
    cName: "nav-text",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Icon type="dashboard" size={20} />,
    cName: "nav-text",
  },
  {
    title: "Psicologos",
    path: "/psychologists",
    icon: <Icon type="mind" size={20} />,
    cName: "nav-text",
  },
];

const SideBarDataWhitoutLogin = [
  {
    title: "Inicio",
    path: "/",
    icon: <Icon type="home" size={20} />,
    cName: "nav-text",
  },
  {
    title: "Psicologos",
    path: "/psychologists",
    icon: <Icon type="mind" size={20} />,
    cName: "nav-text",
  },
  {
    title: "Inicia sesión",
    path: "/login",
    icon: "",
    cName: "nav-text",
  },
];

export { SideBarDataLogin, SideBarDataWhitoutLogin };
