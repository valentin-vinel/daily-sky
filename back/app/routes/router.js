import { Router } from "express";
import * as mainController from "../controllers/mainController.js";

export const router = Router();

router.get("/notes", mainController.home);
// router.use()

// Middleware erreur centralisé
// router.use(errorMiddleware);

// Middleware 404 générique
// router.use(error404Middleware);
