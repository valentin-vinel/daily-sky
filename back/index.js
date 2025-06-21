import "dotenv/config";
import express from "express";
import path from "node:path";
import cors from "cors";
// import { router } from "./app/routes/router";

const app = express();
const port = process.env.PORT || 3000;

// On va ajouter un middleware afin de vérifier si le client (front-end) a l'autorisation d'accéder à notre API
const corsOptions = {
	// Ici, j'indique le ou les domaines qui ont le droit d'accéder à mon API
	origin: `http://localhost:5173`,
	// Je lui donne des accès à certaines méthodes
	methods: ["GET", "POST", "PATCH", "DELETE"],
};

app.use(cors(corsOptions));

// body parser pour spécifier qu'on reçoit du json dans les body des requetes
app.use(express.json());

// Ici, je vais indiquer que je souhaite lancer mon application depuis le lancement de l'API (port 5000)
// J'indique à Express que je souhaite servir mon application cliente sur la racine de mon url (http://localhost:3000)
// Pour cela, je lui indique la racine de mon dossier actuel ainsi que l'endroit où se situe le 'build' de mon app client
app.use(express.static(path.resolve(import.meta.dirname, "../client/dist")));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

// app.use(router);

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
