// import axios, { AxiosResponse } from "axios";
// type Todo = {
//   id: number;
//   title: string;
//   price: number;
// };

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

import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company()
const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);

