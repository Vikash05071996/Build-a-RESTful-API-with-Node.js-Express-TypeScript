"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("hello ji");
});
app.use(() => {
    throw (0, http_errors_1.default)(404, "rout not found");
});
const errorHandler = (err, req, res, next) => {
    console.log(err.message, err.statuscode);
    if (res.headersSent) {
        return next(err);
    }
    res.status(err.statuscode || 500).json({ message: err.message });
};
app.use(errorHandler);
app.listen(9000, () => {
    console.log("server started on port 9000");
});