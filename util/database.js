import * as SQLite from "expo-sqlite";
import { Place } from "../models/Place";

const database = SQLite.openDatabaseSync("places.db");

export async function init() {
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      imageUri TEXT NOT NULL,
      address TEXT NOT NULL,
      lat REAL NOT NULL,
      lng REAL NOT NULL
    );
  `);
}

export async function insertPlace(place) {
  const result = await database.runAsync(
    `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
    [
      place.title,
      place.imageUri,
      place.address,
      place.location.lat,
      place.location.lng,
    ],
  );
  return result;
}

export async function fetchPlaces() {
  const result = await database.getAllAsync("SELECT * FROM places");
  const places = [];
  for (const p of result) {
    places.push(
      new Place(
        p.title,
        p.imageUri,
        { address: p.address, lat: p.lat, lng: p.lng },
        p.id,
      ),
    );
  }
  console.log("places", places);
  return places;
}
