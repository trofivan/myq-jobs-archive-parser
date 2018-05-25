export const addTodo = text => ({
  type: 'ADD_TODO',
  id: 1,
  text
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});
