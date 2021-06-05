import { useReducer } from 'react';
import { initialState, reducer } from './state';
import FormElement from './FormElement';

const Create = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { hosts, elements = [], elementCount } = state;
  // handle hostname onchange
  const hostNameOnChangeHandler = (event: any) => {
    dispatch({
      type: 'add_host',
      value: {
        key: event.target.id,
        keyValue: event.target.value,
      },
    });
  };

  // handle weight onChange
  const weightOnChangeHandler = (event: any) => {
    dispatch({
      type: 'add_weight',
      value: {
        key: event.target.id,
        keyValue: event.target.value,
      },
    });
  };

  const addHostElement = () => {
    dispatch({
      type: 'add_new_host_component',
      value: {
        component: (<FormElement
          id={`${elementCount}`}
          onHandleChangeHostName={hostNameOnChangeHandler}
          onHandleChangeWeight={weightOnChangeHandler}
        />),
      },
    });
  };

  return (
    <div>
      <form>
        <FormElement
          id="0"
          onHandleChangeHostName={hostNameOnChangeHandler}
          onHandleChangeWeight={weightOnChangeHandler}
        />
        {elements}
        <p>
          <button type="button" onClick={addHostElement}>Add host</button>
        </p>
        <p>
          <button type="submit">Create</button>
        </p>
      </form>
      <div>
        <p>
          Host list : {JSON.stringify(hosts)}
        </p>
      </div>
    </div>
  );
};

export default Create;
