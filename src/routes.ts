import { Router } from "express";
import { deletPlayer, getPlayer, getPlayerById, postPlayer } from "./controlers/players-controler";

const router = Router()

router.get("/players",getPlayer);
router.get("/players/:id",getPlayerById);

router.post("/players",postPlayer)

router.delete("/players/:id" ,deletPlayer)

export default router