import { Router } from "express";
import { getPlayer } from "./controlers/players-controler";

const router = Router()

router.get("/players",getPlayer)

export default router