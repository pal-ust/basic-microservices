"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.listen(3001, () => {
    console.log("Calculator microservice is running at port 3001");
});
app.post('/add', (req, res) => {
    res.json(req.body.a + req.body.b);
});
app.post('/sub', (req, res) => {
    res.json(req.body.a - req.body.b);
});
app.post('/mul', (req, res) => {
    res.json(req.body.a * req.body.b);
});
app.post('/div', (req, res) => {
    res.json(req.body.a / req.body.b);
});
