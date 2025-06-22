import "dotenv/config";
import axios from "axios";

const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeather(city) {
	const response = await axios.get(BASE_URL, {
		params: {
			q: city,
			units: "metric",
			appid: API_KEY,
		},
	});
	return response.data;
}
