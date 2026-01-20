import { Routes } from "@angular/router";
import { Home } from "./app/components/home/home";
import { Details } from "./app/components/details/details";

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
