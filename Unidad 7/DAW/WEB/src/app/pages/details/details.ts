import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { HousingLocationInfo } from "src/app/interfaces/housinglocation";
import { HousingService } from "src/app/service/housing-service";

@Component({
  selector: "app-details",
  imports: [ReactiveFormsModule],
  templateUrl: "details.html",
  styleUrl: `details.css`,
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;
  housingLocation: HousingLocationInfo | undefined;
  housingService: HousingService = inject(HousingService);
  applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  });
  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params["id"]);
    const housingLocationId = parseInt(this.route.snapshot.params["id"], 10);
    this.housingService
      .getHousingLocationById(housingLocationId)
      .then((housingLocation) => {
        this.housingLocation = housingLocation;
        this.changeDetectorRef.markForCheck();
      });
  }
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? "",
      this.applyForm.value.lastName ?? "",
      this.applyForm.value.email ?? "",
    );
  }
}
