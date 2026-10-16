import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    const place = route.params?.place;
    if (isFocused && place) {
      setLoadedPlaces((currPlaces) => [...currPlaces, place]);
    }
  }, [isFocused, route.params?.place]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
