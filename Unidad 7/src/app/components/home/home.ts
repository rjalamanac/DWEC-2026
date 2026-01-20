import { ChangeDetectorRef, Component, inject, input } from "@angular/core";
import { HousingLocation } from "../housing-location/housing-location";
import { HousingLocationInfo } from "../../interfaces/housinglocation";
import { HousingService } from "../../services/housing";

@Component({
  selector: "app-home",
  imports: [HousingLocation],
  templateUrl: `./home.html`,
  styleUrls: ["./home.css"],
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  filteredLocationList: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService);
  constructor(private ref: ChangeDetectorRef) {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocationInfo[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
        this.ref.markForCheck();
      });
    this.filteredLocationList = this.housingLocationList;
  }

  houseFilterKeyDown(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
