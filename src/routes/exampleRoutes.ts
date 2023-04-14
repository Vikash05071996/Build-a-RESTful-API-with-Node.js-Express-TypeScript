import { Router } from "express";
import { getExample, getExampleData } from "../controllers/exampleController";
import { getExampleDataValidation } from "../validation/exampleValidation/exampleValidation";

const router = Router();

router.get("/", getExample);
router.post("/login", getExampleDataValidation, getExampleData);

export default router;