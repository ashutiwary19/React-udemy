import { useRef, useState } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { useEffect } from "react";
import { sortPlacesByDistance } from "./loc.js";

function App() {
  const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
  const selPlaces = AVAILABLE_PLACES.filter(
    (place) => storedIds.indexOf(place.id) != -1,
  );
  const [isModalOpen, setIsModelOpen] = useState(false);
  const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(selPlaces);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  // This will crash our application as
  // setAvailablePlaces will re-render the component.
  // which in turn will call this method again
  // which will end up rerenering again
  /*navigator.geolocation.getCurrentPosition((position) => {
    const sortedPlaces = sortedPlacesByDistance(
      AVAILABLE_PLACES,
      position.coords.latitude,
      position.coords.longitude
    );

    setAvailablePlaces(sortedPlaces);
  });
  */

  // this will be executed last.
  // [Dependecies] would allow useEffect to execute function only when
  // dependencies change. If its empty it will execute only once
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude,
      );

      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  // This is not needed as this is not async and can be needed initially line by line
  /*useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    const selPlaces = AVAILABLE_PLACES.filter(
      (place) => storedIds.indexOf(place.id) != -1,
    );
    setPickedPlaces(selPlaces);
  }, []);*/

  function handleStartRemovePlace(id) {
    // modal.current.open();
    setIsModelOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    // modal.current.close();
    setIsModelOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    if (storedIds.indexOf(id) == -1)
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify([id, ...storedIds]),
      );
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current),
    );
    // modal.current.close();
    setIsModelOpen(false);
  }

  return (
    <>
      <Modal ref={modal} open={isModalOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting places by lccation"
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
