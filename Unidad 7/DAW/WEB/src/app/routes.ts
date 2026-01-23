import { Routes } from "@angular/router";
import { Details } from "./pages/details/details";
import { Home } from "./pages/home/home";
import { Formulario } from "./components/formulario/formulario";

const routeConfig: Routes = [
  {
    path: "",
    component: Home,
    title: "Home page",
  },
  {
    path: "details/:id",
    component: Details,
    title: "Home details",
  },
  {
    path: "formulario",
    component: Formulario,
    title: "Formulario",
  },
];
export default routeConfig;
