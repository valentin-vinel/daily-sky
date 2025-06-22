// import { Note } from "../models/associations.js";
import { getAllNotes } from "../services/noteService.js";
import { getWeather } from "../services/weatherService.js";

export async function home(req, res) {
	try {
		const notes = await getAllNotes();

		const weather = await getWeather("Paris");

		res.json({
			date: new Date().toISOString().slice(0, 10), // format YYYY-MM-DD
			notes,
			weather,
		});
	} catch (error) {
		console.error("Error fetching home data:", error);
		res.status(500).json({ error: "Failed to fetch home data" });
	}
}
