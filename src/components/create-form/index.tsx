import { useReducer } from 'react';
import { initialState, reducer } from './state';
import GenerateElement from './GenerateElement';
import Loading from '../Loading';

const CreateForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { formElement = [], hostData, isLoading, message } = state;
  // Add new form element
  const addNewHost = () => {
    dispatch({ action: 'add_new_host' });
  };
  // change form element data
  const onChangeFormElementData = (value: any) => {
    dispatch({ action: 'change_form_data', value });
  };
  const formSubmit = async (event: any) => {
    dispatch({ action: 'set_loading', value: true })
    event.preventDefault();
    try {
      const response = await fetch(
        '/api/configure',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ hostData: Object.values(hostData) })
        });
      const respJson = await response.json();
      if (respJson.status) {
        dispatch({ action: 'set_message', value: 'Config file created. Restart the nginx container' })
      }
    } catch (error) {
      dispatch({ action: 'set_message', value: 'Something went wrong' })
    }
  };
  if (isLoading) {
    return (<Loading />)
  }
  return (
    <div>
      <form>
        {GenerateElement({ value: formElement, onChange: onChangeFormElementData })}
        <p>
          <button type="button" onClick={() => { addNewHost(); }}>Add new host</button>
        </p>
        <p>
          <button type="submit" onClick={formSubmit} >Create</button>
        </p>
      </form>
      <div>
        <p>
          Host data: {JSON.stringify(hostData)}
        </p>
        <p>
         Message: {JSON.stringify(message)}
        </p>
      </div>
    </div>
  );
};

export default CreateForm;
