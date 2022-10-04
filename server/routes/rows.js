import { Router } from "express";

import { checkAuth } from "../utils/checkAuth.js";

import { createRow, getAllRows, getById, removeRow, updateRow } from "../controllers/rows.js";

const router = new Router();


// Create Row
//http://localhost:3002/api/rows
router.post("/", checkAuth, createRow)


// Get All Rows
//http://localhost:3002/api/rows
router.get("/", getAllRows)


// Get Row By Id
// http://localhost:3002/api/rows/:id
router.get('/:id', getById)


// Remove Row
// http://localhost:3002/api/rows/:id
router.delete('/:id', checkAuth, removeRow)


// Update Row
// http://localhost:3002/api/rows/:id
router.put('/:id', checkAuth, updateRow)



export default router;