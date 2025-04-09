"use strict";
// import axios, { AxiosResponse } from "axios";
// type Todo = {
//   id: number;
//   title: string;
//   price: number;
// };
Object.defineProperty(exports, "__esModule", { value: true });
// const logTodo = (id: number, title: string, price: number): void => {
//   console.log(`price: ${price}    title: ${title}   id : ${id}`);
// };
// const asyncFn = async () => {
//   const response: AxiosResponse = await axios("https://dummyjson.com/products", { method: "GET" });
//   const products: Todo[] = response.data.products;
//   products.forEach((val) => logTodo(val.id, val.title, val.price));
// };
// try {
//   asyncFn();
// } catch (error) {
//   console.log(error);
// }
const User_1 = require("./User");
const Company_1 = require("./Company");
const user = new User_1.User();
const company = new Company_1.Company();
console.log(user, company);
