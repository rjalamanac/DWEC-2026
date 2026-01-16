import { Component, input } from "@angular/core";
import { HousingLocationInfo } from "src/app/interfaces/housinglocation";

@Component({
  selector: "app-housing-location",
  imports: [],
  templateUrl: `./housing-location.html`,
  styleUrl: "./housing-location.css",
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
