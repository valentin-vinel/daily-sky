import { getAllNotes } from "../services/noteService.js";
// import { getWeather } from "../services/weatherService.js";

export async function home(req, res) {
	try {
		const notes = await getAllNotes();

		res.json(notes);
	} catch (error) {
		console.error("Error fetching home data:", error);
		res.status(500).json({ error: "Failed to fetch home data" });
	}
}
