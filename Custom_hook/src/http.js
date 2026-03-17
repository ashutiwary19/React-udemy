export async function fetchAvailablePlaces() {
  const resposne = await fetch("http://localhost:3000/places");
  const responseJson = await resposne.json();
  if (!resposne.ok) {
    throw new Error("Error while fetching places");
  }
  return responseJson.places;
}

export async function fetchUserPlaces() {
  const resposne = await fetch("http://localhost:3000/user-places");
  const responseJson = await resposne.json();
  if (!resposne.ok) {
    throw new Error("Error while fetching places");
  }
  return responseJson.places;
}

export async function updateUserPlaces(selPlaces) {
  const resposne = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({
      places: selPlaces,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await resposne.json();
  if (!resposne.ok) {
    throw new Error("Error while updating places");
  }

  return resData.message;
}
