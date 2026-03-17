import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  // Problem with this code is every time data is fetched the component will get rerendered
  // and the fetch api is called again.
  // So the component will create an infinite loop
  /*fetch("http://localhost:3000/places")
    .then((placesResponse) => placesResponse.json())
    .then((resData) => setAvailablePlaces(resData.places));*/

  useEffect(() => {
    /* fetch("http://localhost:3000/places")
      .then((placesResponse) => placesResponse.json())
      .then((resData) => setAvailablePlaces(resData.places));*/
    fetchPlaces();
    async function fetchPlaces() {
      const resposne = await fetch("http://localhost:3000/places");
      const responseJson = await resposne.json();
      setAvailablePlaces(responseJson.places);
    }
    /* const placePromise = fetchPlaces();
    placePromise.then((places) => setAvailablePlaces(places));
    async function fetchPlaces() {
      const resposne = await fetch("http://localhost:3000/places");
      const responseJson = await resposne.json();
      return responseJson.places;
    }*/
  }, []);
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
