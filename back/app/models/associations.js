import { Note } from "./note.js";
import { Member } from "./member.js";

Note.belongsTo(Member, {
	foreignKey: "member_id",
	as: "member",
});

Member.hasMany(Note, {
	foreignKey: "member_id",
	as: "notes",
});

export { Note, Member };
