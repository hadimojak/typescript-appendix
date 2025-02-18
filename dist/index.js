"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
(0, axios_1.default)("https://jsonplaceholder.typicode.com/todos/1", { method: "GET" }).then((response) => {
    //   const { id, title, completed: finished }: Todo | Todo1 = response.data;
    const { id, title, completed: finished } = response.data;
    console.log(logTodo(id, title, finished));
});
const logTodo = (id, title, completed) => {
    return `finished: ${completed}    title: ${title}   id : ${id}`;
};
