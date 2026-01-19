import { Routes } from "@angular/router";
import { Details } from "./pages/details/details";
import { Home } from "./pages/home/home";

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
];
export default routeConfig;
