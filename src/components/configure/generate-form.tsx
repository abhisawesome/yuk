import ConfigureForm from './configure-form';


interface Props {
    value: Array<any>,
    onChange: Function
  }
  // eslint-disable-next-line arrow-body-style
  const GenerateElement = ({ value, onChange }: Props) => {
    return value.map((item) => <ConfigureForm id={item.id} onChange={onChange} />);
  };
  
  export default GenerateElement;
  