"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const data = (0, axios_1.default)("https://jsonplaceholder.typicode.com/todos/1", { method: "GET" }).then((data) => console.log(data.data));
