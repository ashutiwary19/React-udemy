import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";
import ErrorPage from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
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
    setIsLoading(true);
    fetchPlaces();
    async function fetchPlaces() {
      try {
        const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude,
          );
          setAvailablePlaces(sortedPlaces);
          setIsLoading(false);
        });
        // setAvailablePlaces(responseJson.places);
      } catch (error) {
        setError(error);
      } finally {
        // setIsLoading(false);
      }
    }
    /* const placePromise = fetchPlaces();
    placePromise.then((places) => setAvailablePlaces(places));
    async function fetchPlaces() {
      const resposne = await fetch("http://localhost:3000/places");
      const responseJson = await resposne.json();
      return responseJson.places;
    }*/
  }, []);
  if (error) {
    return <ErrorPage title="An Error occured!" message={error.message} />;
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText="Fetching places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
