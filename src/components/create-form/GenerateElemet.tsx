import From from './Form';

interface Props {
    value :Array<{id:number}>,
    onChange: Function
}
// eslint-disable-next-line arrow-body-style
const GenerateElement = ({ value, onChange }:Props) => {
  return value.map((item) => <From id={item.id} onChange={onChange} />);
};

export default GenerateElement;
