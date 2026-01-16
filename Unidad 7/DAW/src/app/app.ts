import { Component } from "@angular/core";
import { Home } from "./pages/home/home";
import { RouterLink, RouterOutlet } from "@angular/router";
@Component({
  selector: "app-root",
  imports: [Home, RouterOutlet, RouterLink],
  templateUrl: `./app.html`,
  styleUrls: ["./app.css"],
})
export class App {
  title = "default";
}
