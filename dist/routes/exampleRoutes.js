"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const exampleController_1 = require("../controllers/exampleController");
const exampleValidation_1 = require("../validation/exampleValidation/exampleValidation");
const router = (0, express_1.Router)();
router.get("/", exampleController_1.getExample);
router.post("/login", exampleValidation_1.getExampleDataValidation, exampleController_1.getExampleData);
exports.default = router;
