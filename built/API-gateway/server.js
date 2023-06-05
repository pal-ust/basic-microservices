"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.listen(3000, () => {
    console.log(`API Gateway Running at port 3000`);
});
const calcServiceProxy = (0, express_http_proxy_1.default)('http://127.0.0.1:3001');
const dateServiceProxy = (0, express_http_proxy_1.default)('http://127.0.0.1:3002');
app.post('/add', (req, res) => {
    calcServiceProxy(req, res);
});
app.post('/sub', (req, res) => {
    calcServiceProxy(req, res);
});
app.post('/mul', (req, res) => {
    calcServiceProxy(req, res);
});
app.post('/div', (req, res) => {
    calcServiceProxy(req, res);
});
app.get('/todayDate', (req, res) => {
    dateServiceProxy(req, res);
});
app.post('/dateDiff', (req, res) => {
    dateServiceProxy(req, res);
});
app.get('/test', (req, res) => {
    console.log("Test");
});
