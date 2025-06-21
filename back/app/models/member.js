import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/sequelize-client.js";

export class Member extends Model {}

Member.init(
	{
		username: {
			type: DataTypes.TEXT,
			allowNull: false,
			unique: true,
		},
		email: {
			type: DataTypes.TEXT,
			allowNull: false,
			unique: true,
		},
		password_hash: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "member",
	},
);
