export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

export const mockTodoData: TodoItem[] = [
  { id: '1', title: 'Learn TypeScript', completed: false },
  { id: '2', title: 'Build a Todo App', completed: false },
  { id: '3', title: 'Test the App', completed: false }
];

export const addTodo = (todos: TodoItem[], title: string): TodoItem[] => {
  const newTodo: TodoItem = {
    id: (todos.length + 1).toString(),
    title,
    completed: false
  };
  return [...todos, newTodo];
};

export const toggleTodo = (todos: TodoItem[], id: string): TodoItem[] => {
  return todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
};

export const removeTodo = (todos: TodoItem[], id: string): TodoItem[] => {
  return todos.filter(todo => todo.id !== id);
};