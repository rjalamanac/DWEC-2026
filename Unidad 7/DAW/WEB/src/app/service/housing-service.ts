import { Injectable } from "@angular/core";
import { HousingLocationInfo } from "../interfaces/housinglocation";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  housingLocationList: HousingLocationInfo[] = [];
  url = "http://localhost:3000/housing-location";

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(
    id: number,
  ): Promise<HousingLocationInfo | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    const locationJson = await data.json();
    return locationJson[0] ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
