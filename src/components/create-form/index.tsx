import { useReducer } from 'react';
import { initialState, reducer } from './state';
import GenerateElement from './GenerateElemet';

const CreateForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { formElement = [], hostData } = state;
  // Add new form element
  const addNewHost = () => {
    dispatch({ action: 'add_new_host' });
  };
  // change form element data
  const onChangeFormElementData = (value:any) => {
    dispatch({ action: 'change_form_data', value });
  };
  return (<div>
        <form>
            {GenerateElement({ value: formElement, onChange: onChangeFormElementData })}
           <p>
           <button type="button" onClick={() => { addNewHost(); }}>Add new host</button>
           </p>
        </form>
        <div>
            <p>
                Host data: {JSON.stringify(hostData)}
            </p>
        </div>
    </div>);
};

export default CreateForm;
