import express from "express";
import { getTest } from "../controllers/testConroller";
const router = express.Router();

router.route("/").get(getTest);

export default router;
