interface Action {
  value: any,
  type: String
}
interface State {
  isLoading: boolean,
  hosts: Array<{ key: String, host?: String, weight?: String }>,
  elements: Array<Object>,
  elementCount: number
}

/**
 * For useReducer hook
 */
const initialState = {
  isLoading: false,
  hosts: [],
  elements: [],
  elementCount: 1,
};

/**
 * For useReducer hook
 */
const reducer = (state: State, action: Action) => {
  const { value, type } = action;
  switch (type) {
    case 'add_new_host_component': {
      const { elements, elementCount } = state;
      const { component = null } = value;
      return { ...state, elements: [...elements, component], elementCount: elementCount + 1 };
    }
    case 'add_host': {
      const { key, keyValue } = value;
      const { hosts } = state;
      const flag = hosts.find((host) => host.key === key) === undefined;
      const newHost = flag
        ? [...hosts, { key, host: keyValue }]
        : hosts.map((prev) => {
          if (prev.key === key) {
            return {
              key,
              host: keyValue,
              weight: prev.weight,
            };
          }
          return prev;
        });
      return { ...state, hosts: newHost };
    }
    case 'add_weight': {
      const { key, keyValue } = value;
      const { hosts } = state;
      const flag = hosts.find((host) => host.key === key) === undefined;
      const newHost = flag
        ? [...hosts, { key, weight: keyValue }]
        : hosts.map((prev) => {
          if (prev.key === key) {
            return {
              key,
              host: prev.host,
              weight: keyValue,
            };
          }
          return prev;
        });
      return { ...state, hosts: newHost };
    }
    default:
      return state;
  }
};

export {
  initialState,
  reducer,
};
