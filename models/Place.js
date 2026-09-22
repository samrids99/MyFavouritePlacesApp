class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    // { lat: 0.124653, lng: 125.468923}
    this.location = location;
    this.id = new Date().toString() + Math.random().toString();
  }
}
