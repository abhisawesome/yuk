import { useState } from 'react';

interface Props {
    id: number,
    onChange?: Function
}
const Form = ({ id, onChange = () => { } }: Props) => {
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
        <div>
            <select value={value.type} id="type" onChange={handleChanges} required>
                <option value="http">HTTP</option>
            </select>
            <input required type="input" value={value.host} onChange={handleChanges} id="host" placeholder="Enter hostname" />
            <input required type="number" value={value.weight} id="weight" onChange={handleChanges} placeholder="Enter weight" />

        </div>
  );
};

export default Form;
