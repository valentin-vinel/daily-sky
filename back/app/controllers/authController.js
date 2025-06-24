import "dotenv/config";
import { Member } from "../models/associations.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// TODO: Les fonctions ne sont pas définitives, à contrôler + refaire

// Inscription
export async function register(req, res) {
	try {
		const { username, email, password } = req.body;

		// Vérifier que l’utilisateur n’existe pas déjà
		const existingMember = await Member.findOne({ where: { email } });
		if (existingMember) {
			return res.status(400).json({ error: "L'email est déjà utilisé" });
		}

		// Hasher le mot de passe
		const password_hash = await bcrypt.hash(password, 10);

		// Créer l’utilisateur
		const member = await Member.create({ username, email, password_hash });

		res
			.status(201)
			.json({ message: "Compte utilisateur créé", memberId: member.id });
	} catch (error) {
		console.error("Register error:", error);
		res.status(500).json({ error: "Internal server error" });
	}
}

// Connexion
export async function login(req, res) {
	try {
		const { email, password } = req.body;

		// Chercher l’utilisateur
		const member = await Member.findOne({ where: { email } });
		if (!member) {
			return res.status(401).json({ error: "Email ou mot de passe incorrect" });
		}

		// Comparer le mot de passe
		const validPassword = await bcrypt.compare(password, member.password_hash);
		if (!validPassword) {
			return res.status(401).json({ error: "Email ou mot de passe incorrect" });
		}

		// Générer un token JWT simple
		const token = jwt.sign({ memberId: member.id }, process.env.JWT_SECRET, {
			expiresIn: "1h",
		});

		res.json({ message: "Connexion réussie", token });
	} catch (error) {
		console.error("Login error:", error);
		res.status(500).json({ error: "Internal server error" });
	}
}
