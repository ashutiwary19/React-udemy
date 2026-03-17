export async function fetchAvailablePlaces() {
  const resposne = await fetch("http://localhost:3000/places");
  const responseJson = await resposne.json();
  if (!resposne.ok) {
    throw new Error("Error while fetching places");
  }
  return responseJson.places;
}
