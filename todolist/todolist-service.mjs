export class TodoListService {

  todolist = ['amien', 'kurniawan'];

  getDataJson() {
    return JSON.stringify({
      code: 200,
      status: "OK",
      data: this.todolist.map((value, index) => {
        return {
          id: index,
          todo: value
        }
      })
    });
  }

  gettodolist(request, response) {
    response.write(this.getDataJson());
    response.end();
  }

  createtodolist(request, response) {

    request.addListener('data', (data) => {

      const body = JSON.parse(data.toString());

      this.todolist.push(body.todo);

      response.write(this.getDataJson());
      response.end();
    })

  }
}
