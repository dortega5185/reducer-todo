
  export const initialState = [
      {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
      }

];

  export const reducerTodo = (state, action) => {
      switch (action.type) {
        case "ADD_TODO":
          const newTodo = {
            item: action.payload,
            completed: false,
            id: Date.now(),
          };

          return [...state, newTodo];

        case "TOGGLE_COMPLETED":
          return state.map((done) => {
            return done.id === action.payload
              ? {
                  ...done,
                  completed: !done.completed,
                }
              : done;
          });

        case "CLEAR_DEFAULT":
          return state.filter((item) => !item.completed);
          default: 
          return state;
      }

  };

