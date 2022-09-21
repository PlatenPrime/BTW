import { Router } from "express";
import { createPallet, getAllPallets, removePallet } from "../controllers/pallets.js";
import { checkAuth } from "../utils/checkAuth.js";


const router = new Router();


// Create Pallet
//http://localhost:3002/api/pallets
router.post("/", checkAuth, createPallet)

// Get All Pallets
//http://localhost:3002/api/pallets
router.get("/", getAllPallets)



// Remove Pallet
// http://localhost:3002/api/pallets/:id
router.delete('/:id', checkAuth, removePallet)


export default router;