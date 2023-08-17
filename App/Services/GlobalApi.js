import axios from "axios"

const BASE_URL = "https://maps.googleapis.com/maps/api/place"
const API_KEY = "{$API_KEY}"

const nearByPlace = (lat, lng, type) => axios.get(BASE_URL +
    "/nearbysearch/json?" +
    "&location=" + lat + "," + lng + "&radius=1500&type=" + type+ "&key=" + API_KEY)

export default {
    nearByPlace
}
