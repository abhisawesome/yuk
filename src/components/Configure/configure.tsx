import { useReducer } from 'react';
import { initialState, reducer } from './state';
import GenerateElement from './generate-form';
import Loading from '@/components/loading';

const Configure = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { formElement = [], hostData, isLoading, message, requireServerRestart } = state;
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
                    body: JSON.stringify({ token: localStorage.getItem('token'),hostData: Object.values(hostData) })
                });
            const respJson = await response.json();
            if (respJson.status) {
                dispatch({
                    action: 'set_message', value: {
                        message: 'Config file created',
                        status: true
                    }
                })
            }else{
                throw new Error('Config file not created')
            }
        } catch (error) {
            dispatch({
                action: 'set_message', value: {
                    message: error.message || 'Something went wrong',
                    status: false
                }
            })
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
            {requireServerRestart && (
                <div className="flex mt-10 items-center justify-center">
                    <span className="bg-gray-100">Restart the server from yuk dashboard home</span>
                </div>
            )}
            {message && message.length !== 0 && (
                <div className="flex mt-10 items-center justify-center">
                    <span className="bg-gray-100">{message}</span>
                </div>
            )}
            {/* <div>
                <div className="grid-cols-2">
                    Host data: {JSON.stringify(hostData)}
                </div>
                
            </div> */}
        </div>

    )
}

export default Configure;