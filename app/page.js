import AddNewTodo from "./add-new-todo";
import TodoList from "./todo-list";

export default function Page() {
  return (
    <div style={{color:'white', margin:'auto', width:'35%',paddingTop:'5px'}}>
      <AddNewTodo />
      <TodoList />
    </div>
  );
}
