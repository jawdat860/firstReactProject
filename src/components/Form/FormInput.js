import { useState } from "react";

function FormInput(props) {
  const [item, setItem] = useState("");
  function itemHandler(e) {
    setItem(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    const data = {
      id: Math.random(),
      value: item,
    };
    props.data(data);
    setItem("");
  }
  return (
    <form onSubmit={submitHandler}>
      <label>input</label>
      <input type="text" onChange={itemHandler} value={item} />
      <button type="submit"> ok</button>
    </form>
  );
}
export default FormInput;
