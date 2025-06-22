import { Note } from "../models/associations.js";

export async function getAllNotes() {
	return await Note.findAll({
		include: ["member"],
		order: [["date", "DESC"]],
	});
}
