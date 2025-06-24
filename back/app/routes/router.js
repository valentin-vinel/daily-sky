import { Router } from "express";
import * as mainController from "../controllers/mainController.js";
import * as authController from "../controllers/authController.js";

export const router = Router();

router.get("/notes", mainController.home);

// TODO: routes auth
router.post("/register", authController.register);
router.post("/login", authController.login);

// TODO: Middleware erreur centralisé
// router.use(errorMiddleware);

// TODO: Middleware 404 générique
// router.use(error404Middleware);
