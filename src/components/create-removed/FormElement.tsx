interface Props {
  id: String,
  onHandleChangeHostName?: Function,
  onHandleChangeWeight?: Function,
  deleteHandler?: Function
}
const FormElement = (props: Props) => {
  const {
    id,
    onHandleChangeHostName = () => { },
    onHandleChangeWeight = () => { },
    // deleteHandler = () => { },
  } = props;
  return (
    <div>
      <input type="input"
        key={`${new Date().getTime() * 10}`}
        placeholder="Enter hostname"
        id={`${id}`}
        required
        onChange={(value) => {
          onHandleChangeHostName(value);
        }}
      />
      <input
        type="number"
        key={`${new Date().getTime() * 15}`}
        placeholder="Enter weight"
        id={`${id}`}
        required
        onChange={(value) => {
          onHandleChangeWeight(value);
        }}
      />
      {/* <button type="button" onClick={(value) => {
        deleteHandler(key);
      }}>
        Delete this host
      </button> */}
    </div>);
};

export default FormElement;
