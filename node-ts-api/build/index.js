"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 3001;
let app = express_1.default();
app.use(express_1.default.urlencoded({ extended: false }));
app.get('/', (req, res, next) => {
    res.send("OK");
});
app.listen(PORT, () => console.log("Server is up!!!"));
