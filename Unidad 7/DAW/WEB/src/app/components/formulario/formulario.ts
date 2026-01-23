import { ChangeDetectorRef, Component, inject } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";
import { HousingLocationInfo } from "src/app/interfaces/housinglocation";
import { HousingService } from "src/app/service/housing-service";

@Component({
  selector: "app-formulario",
  imports: [ReactiveFormsModule],
  templateUrl: "./formulario.html",
  styleUrl: "./formulario.css",
})
export class Formulario {
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocationInfo | undefined;
  changeDetectorRef: ChangeDetectorRef;
  applyForm = new FormGroup({
    name: new FormControl(""),
    city: new FormControl(""),
    state: new FormControl(""),
    photo: new FormControl(""),
    availableUnits: new FormControl(""),
    wifi: new FormControl(""),
    laundry: new FormControl(""),
  });
  constructor(private ref: ChangeDetectorRef) {
    this.changeDetectorRef = ref;
  }
  async submitApplication() {
    const dataRequest: HousingLocationInfo = {
      availableUnits: Number(this.applyForm.value.availableUnits),
      id: 0,
      name: this.applyForm.value.name ?? "",
      city: this.applyForm.value.city ?? "",
      state: this.applyForm.value.state ?? "",
      photo: this.applyForm.value.photo ?? "",
      wifi: Boolean(this.applyForm.value.wifi),
      laundry: Boolean(this.applyForm.value.laundry),
    };
    this.housingLocation = await this.housingService.addNewHouse(dataRequest);
    this.changeDetectorRef.markForCheck();
    const dataNu = this.housingLocation?.availableUnits ?? 0 > 9;
  }
}
