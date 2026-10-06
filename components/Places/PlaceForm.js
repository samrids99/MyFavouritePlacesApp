import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colour";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";

function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [pickedLocation, setPickedLocation] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  function savePlaceHandler() {
    console.log("entered title", enteredTitle);
    console.log("selected image", selectedImage);
    console.log("picked location", pickedLocation);
  }

  const pickLocationHandler = useCallback((location) => {
    setPickedLocation(location);
  }, []);

  function takeImageHandler(imageUri) {
    setSelectedImage(imageUri);
  }

  /*
    use scroll view when you have a clearly
    defined number of list items that is just too large
    for small device screens
  */
  /*
    use flat list when you have a large number of list items
    that needs scalability
  */
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
