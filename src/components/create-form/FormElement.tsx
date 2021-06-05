interface Props {
  id: String,
  onHandleChangeHostName?: Function,
  onHandleChangeWeight?: Function,
  deleteHandler?: Function,
  onHandleChangeType?: Function
}
const FormElement = (props: Props) => {
  const {
    id,
    onHandleChangeHostName = () => { },
    onHandleChangeWeight = () => { },
    onHandleChangeType = () => { },
  } = props;
  return (
    <div>
      <div>
        <select id={`${id}`} onChange={(value) => { onHandleChangeType(value); }}>
          <option value="http">HTTP</option>
        </select>
      </div>
      <div>
        <input type="input"
          placeholder="Enter hostname"
          id={`${id}`}
          required
          onChange={(value) => {
            onHandleChangeHostName(value);
          }}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Enter weight"
          id={`${id}`}
          required
          onChange={(value) => {
            onHandleChangeWeight(value);
          }}
        />
      </div>
    </div>);
};

export default FormElement;
