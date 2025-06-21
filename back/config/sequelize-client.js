import "dotenv/config";
import { Sequelize } from "sequelize";

console.log(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD);

export const sequelize = new Sequelize(
	process.env.PGDATABASE,
	process.env.PGUSER,
	process.env.PGPASSWORD,
	{
		dialect: "postgres",
		define: {
			underscored: true,
			timestamps: false,
		},
		logging: false,
	},
);

try {
	await sequelize.authenticate();
	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}
