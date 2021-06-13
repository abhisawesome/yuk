interface State {
  isLoading: boolean,
  formElement: Array<Object>
  hostData: Object,
  message: String,
  requireServerRestart: boolean
}
interface Type {
  value?: any,
  action: String
}
const initialState = {
  isLoading: false,
  formElement: [{ id: 0 }],
  hostData: {},
  message: '',
  requireServerRestart: false
};

const reducer = (state: State, type: Type) => {
  const { value, action } = type;
  switch (action) {
    case 'add_new_host': {
      const { formElement } = state;
      return { ...state, formElement: [...formElement, { id: formElement.length }] };
    }
    case 'change_form_data': {
      const { hostData } = state;
      return { ...state, hostData: { ...hostData, ...value } };
    }
    case 'set_loading': {
      return { ...state, isLoading: value }
    }
    case 'set_message': {
      const { message, status } = value;
      return { ...state, message: message, isLoading: false, requireServerRestart: status }
    }
    case 'set_server_restart': {
      return { ...state, requireServerRestart: value }
    }
    default:
      return state;
  }
};

export {
  initialState, reducer,
};
