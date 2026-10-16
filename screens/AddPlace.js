import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";

function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    console.log("handler called", place);
    try {
      await insertPlace(place);
      navigation.popTo("AllPlaces", { place });
    } catch (err) {
      console.log("insert failed:", err);
    }
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
