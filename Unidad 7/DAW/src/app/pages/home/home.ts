import { Component, inject } from "@angular/core";
import { HousingLocation } from "../../components/housing-location/housing-location";
import { HousingLocationInfo } from "src/app/interfaces/housinglocation";
import { HousingService } from "src/app/service/housing-service";

@Component({
  selector: "app-home",
  imports: [HousingLocation],
  templateUrl: `./home.html`,
  styleUrl: `./home.css`,
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
