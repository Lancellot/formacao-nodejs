import { Router } from "express";
import * as PlayersController from "../controllers/players-controller";

const router = Router();

router.get("/players", PlayersController.getAllPlayers);
router.get("/players/:id", PlayersController.getPlayerById);
router.post("/players", PlayersController.insertPlayer);
router.delete("/players/:id", PlayersController.deletePlayer)
router.patch("/players/:id", PlayersController.patchPlayer)
export default router;
