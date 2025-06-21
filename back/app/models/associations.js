import { Note } from "./note.js";
import { Member } from "./member.js";

Note.belongsTo(Member, {
	foreignKey: "member_id",
});

Member.hasMany(Note, {
	foreignKey: "member_id",
});

export { Note, Member };
