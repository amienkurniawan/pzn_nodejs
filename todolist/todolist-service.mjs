export class TodoListService {
  todolist = ['amien', 'kurniawan'];

  gettodolist(request, response) {

    const json = JSON.stringify({
      code: 200,
      status: "OK",
      data: this.todolist.map((value, index) => {
        return {
          id: index,
          todo: value
        }
      })
    })

    response.write(json);
    response.end()
  }
}