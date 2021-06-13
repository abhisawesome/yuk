import { useState } from 'react';

interface Props {
    id: number,
    onChange?: Function
}

const ConfigureForm = ({ id, onChange = () => { } }: Props) => {
    const [value, setValue] = useState({
        host: undefined,
        weight: undefined,
        type: 'http',
    });
    const handleChanges = (event: any) => {
        onChange({ [id]: { ...value, [event.target.id]: event.target.value } });
        setValue({ ...value, [event.target.id]: event.target.value });
    };
    return (
        <div className="flex mt-10 items-center justify-center">
            <div className="grid-rows-1">
                <select
                    required
                    id="type"
                    value={value.type}
                    onChange={handleChanges}
                    className="px-8 py-3 rounded-full"
                >
                    <option
                        selected
                        value="http"
                    >
                        HTTP
                    </option>
                </select>
                <input
                    required
                    type="text"
                    id="host"
                    onChange={handleChanges}
                    value={value.host}
                    placeholder="Host (eg:139.1.1.1:5000)"
                    className="ml-3 box-content  w-72 p-4 border-4 rounded-full"
                />
                <input
                    required type="number"
                    value={value.weight}
                    id="weight"
                    onChange={handleChanges}
                    placeholder="weight to host"
                    className="ml-3 box-content  w-15 rounded-full"
                />
            </div>
        </div>
    )
}

export default ConfigureForm;