export const initialState = {
  isLoading: false,
  hosts: [],
};

interface Action {
    value: any,
    type: String
}

export const reducer = (state:Object, action:Action) => {
  const { value, type } = action;
  switch (type) {
    default:
      return state;
  }
};
