import { TodoListService } from './todolist-service.mjs';
import http from 'http';

const serviceTodolist = new TodoListService();

const server = http.createServer((request, response) => {
  response.write("Todolist API");
  response.end();


});

server.listen(3000)