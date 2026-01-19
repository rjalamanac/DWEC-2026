const crypto = require("crypto");
class HousingLocation {
  constructor(name, city, state, photo, availableUnits, wifi, laundry) {
    this.name = name;
    this.city = city;
    this.state = state;
    this.photo = photo;
    this.availableUnits = availableUnits;
    this.wifi = wifi;
    this.laundry = laundry;
    this.id = generateUUID();
  }
  static createHousingLocation(
    name,
    city,
    state,
    photo,
    availableUnits,
    wifi,
    laundry,
  ) {
    const housingLocation = new HousingLocation();
    housingLocation.name = name;
    housingLocation.city = city;
    housingLocation.state = state;
    housingLocation.photo = photo;
    housingLocation.availableUnits = availableUnits;
    housingLocation.wifi = wifi;
    housingLocation.laundry = laundry;
    return housingLocation;
  }
}

function generateUUID() {
  return crypto.randomUUID();
}

module.exports = HousingLocation;
