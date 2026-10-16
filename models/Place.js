export class Place {
  constructor(title, imageUri, location, id) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    // { lat: 0.124653, lng: 125.468923}
    this.location = { lat: location.lat, lng: location.lng };
    this.id = id;
  }
}
