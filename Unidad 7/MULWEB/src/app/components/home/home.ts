import { Component, input } from "@angular/core";
import { HousingLocation } from "../housing-location/housing-location";
import { HousingLocationInfo } from "../../interfaces/housinglocation";

@Component({
  selector: "app-home",
  imports: [HousingLocation],
  templateUrl: `./home.html`,
  styleUrls: ["./home.css"],
})
export class Home {
  readonly baseUrl = "https://angular.dev/assets/images/tutorials/common";
  housingLocation: HousingLocationInfo = {
    id: 9999,
    name: "Test Home",
    city: "Test city",
    state: "ST",
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
