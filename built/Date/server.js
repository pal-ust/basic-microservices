"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.listen(3002, () => {
    console.log("Date microservice is running at port 3001");
});
app.get('/todayDate', (req, res) => {
    let now = new Date;
    res.json(now);
});
app.post('/dateDiff', (req, res) => {
    const date1 = new Date(req.body.start);
    const date2 = new Date(req.body.end);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    res.json(diffDays);
});
