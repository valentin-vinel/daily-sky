import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/sequelize-client.js";

export class Note extends Model {}

Note.init(
	{
		date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		temperature: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		comment: {
			type: DataTypes.TEXT,
		},
		member_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "note",
	},
);
