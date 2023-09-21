import { TodoListService } from './todolist-service.mjs';
import http from 'http';

const serviceTodolist = new TodoListService();


const server = http.createServer((request, response) => {

  response.setHeader('Content-Type', 'application/json');

  if (request.method == 'GET') {
    serviceTodolist.gettodolist(request, response);
  } else if (request.method == 'POST') {
    serviceTodolist.createtodolist(request, response);
  } else if (request.method == 'PUT') {
    serviceTodolist.updateTodo(request, response);
  } else if (request.method == 'DELETE') {
    serviceTodolist.deleteTodo(request, response);
  }

});

server.listen(3000)