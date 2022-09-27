import { Router } from "express";
import { createRow } from "../controllers/rows.js";
import { checkAuth } from "../utils/checkAuth.js";


const router = new Router();


// Create Row
//http://localhost:3002/api/rows
router.post("/", checkAuth, createRow)




export default router;