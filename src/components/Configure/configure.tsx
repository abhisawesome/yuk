import { useReducer } from 'react';
import { initialState, reducer } from './state';
import GenerateElement from './generate-form';
import Loading from '@/components/loading';


const Configure = () => {
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
    return (
        <div className="grid">
            <form>
                {GenerateElement({ value: formElement, onChange: onChangeFormElementData })}
                <div
                    className="flex mt-10 items-center justify-center"
                >
                    <div className="row-span-1">
                        <button
                            disabled={isLoading}
                            type="button"
                            className="ml-3 box-content  w-72 p-4 border-4 rounded-full "
                            onClick={() => { addNewHost(); }}
                        >
                            Add new host
                        </button>
                    </div>

                    <button
                        disabled={isLoading}
                        type="submit"
                        className="ml-3 box-content  w-72 p-4 border-4 rounded-full "
                        onClick={formSubmit}
                    >
                        {!isLoading ? 'Create config' : (
                            <div className="flex items-center justify-center">
                                <Loading />
                            </div>
                        )}
                    </button>
                </div>
            </form>
            <div className="flex mt-10 items-center justify-center">

            </div>
            <div>
                <div className="grid-cols-2">
                    Host data: {JSON.stringify(hostData)}
                </div>
                <div>
                    Message: {JSON.stringify(message)}
                </div>
            </div>
        </div>

    )
}

export default Configure;