import { ChangeDetectorRef, Component, inject } from "@angular/core";
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
  housingLocationId = "";
  housingLocation: HousingLocationInfo | undefined;
  housingService: HousingService = inject(HousingService);
  applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  });
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.housingLocationId = this.route.snapshot.params["id"];
    this.housingService
      .getHousingLocationById(this.housingLocationId)
      .then((housingLocation) => {
        this.housingLocation = housingLocation;
        this.changeDetectorRef.markForCheck();
      });
  }
  submitApplication() {}
}
