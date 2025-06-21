import { sequelize } from "../../config/sequelize-client.js";
import { Note, Member } from "../../app/models/associations.js";
import bcrypt from "bcrypt";

const members = [
	{ username: "Jules", email: "jules@test.test", password: "abcd1234" },
	{ username: "Marie", email: "marie@test.test", password: "1234abcd" },
];

const notes = [
	{
		date: "2025-01-01",
		temperature: 15,
		comment: "Bonne année!",
		member_id: 1,
	},
	{
		date: "2025-01-01",
		temperature: 15,
		comment: "Beau temps aujourd'hui",
		member_id: 2,
	},
];

for (const member of members) {
	try {
		const password_hash = await bcrypt.hash(member.password, 10);
		await Member.create({
			username: member.username,
			email: member.email,
			password_hash,
		});
	} catch (error) {
		console.log("Error with user:", member.username);
		console.error(error);
	}
}

for (const note of notes) {
	try {
		const newUser = await Note.create({
			date: note.date,
			temperature: note.temperature,
			comment: note.comment,
			member_id: note.member_id,
		});
		console.log(`User créé avec id : ${newUser.id}`);
	} catch (error) {
		console.log("Error with note:", note.name);
		console.error(error);
	}
}

console.log("\n✅ Seeding done!\n");
console.log("---");
console.log("Data inserted:");
console.log(members.length, "members");
console.log(notes.length, "notes");
console.log("---");
console.log("");

await sequelize.close();
