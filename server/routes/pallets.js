import { Router } from "express";
import { createPallet, getAllPallets } from "../controllers/pallets.js";
import { checkAuth } from "../utils/checkAuth.js";


const router = new Router();


// Create Pallet
//http://localhost:3002/api/pallets
router.post("/", checkAuth, createPallet)

// Get All Pallets
//http://localhost:3002/api/pallets
router.get("/", getAllPallets)


export default router;