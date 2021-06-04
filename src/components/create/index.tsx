import { useReducer } from 'react';
import { initialState, reducer } from './state';

const Create = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // handle hostname onchange
  const hostNameOnChangeHandler = (event: any) => {
    console.log(event.target.value);
  };
  return (
        <div>
            <form>
                <input type="input" placeholder="Enter hostname" onChange={hostNameOnChangeHandler}/>
                <input type="number" placeholder="Enter weight" />
                <p>
                    <button type="button" value="">Add new host</button>
                </p>
            </form>
        </div>
  );
};

export default Create;
