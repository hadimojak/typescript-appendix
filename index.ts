import axios from "axios";

const data = axios("https://jsonplaceholder.typicode.com/todos/1", { method: "GET" }).then((data) => console.log(data.data));
