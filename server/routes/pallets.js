import { Router } from "express";
import { createPallet } from "../controllers/pallets.js";
import { checkAuth } from "../utils/checkAuth.js";


const router = new Router();


// Create Pallet
//http://localhost:3002/api/pallets
router.post("/", checkAuth, createPallet)




export default router;